import { Button, Popover } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useEffect, useState } from 'react';
import { Calendar, Home } from 'tabler-icons-react';

import * as Styled from './availability-setter.style';

interface AvailabilitySetterProps {}

export const AvailabilitySetter = ({}: AvailabilitySetterProps) => {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [dateRange, setDateRange] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const onDateChange = (dates: [Date | null, Date | null]) => {
    setValue(dates);

    // Check if both dates are selected
    if (dates[0] && dates[1]) {
      const startDate = dates[0];
      const endDate = dates[1];
      const range = `${startDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
      })} - ${endDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
      })}`;

      setDateRange(range);

      // Make a request to the backend API
      fetch('/api/update-home-date-range', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startDate,
          endDate,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    setIsFetching(true);

    fetch('/api/get-home')
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          const startDate = new Date(data.startDate);
          const endDate = new Date(data.endDate);
          setValue([startDate, endDate]);

          const formattedStartDate = startDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
          });
          const formattedEndDate = endDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
          });
          const range = `${formattedStartDate} - ${formattedEndDate}`;
          setDateRange(range);
        }

        setIsFetching(false);
      })
      .catch((error) => {
        setError('Error fetching home data.');
        console.error(error);
        setIsFetching(false);
      });
  }, []);

  return (
    <Popover position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button
          variant="gradient"
          gradient={{ from: 'teal', to: 'blue', deg: 60 }}
          radius="xl"
          leftIcon={<Home size={18} />}
          compact
          styles={(theme) => ({
            root: {
              fontSize: 13,
              fontWeight: 500,
              paddingLeft: 15,
              paddingRight: 15,
              opacity: 0.9,
            },
          })}
          loading={isFetching}
        >
          {dateRange ? dateRange : 'Set your availability'}
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <DatePicker
          type="range"
          value={value}
          onChange={onDateChange}
          size="sm"
        />
      </Popover.Dropdown>
    </Popover>
  );
};
