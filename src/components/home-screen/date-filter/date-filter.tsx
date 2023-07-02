import { DatePicker } from '@mantine/dates';
import * as Styled from './date-filter.style';
import { useEffect, useState } from 'react';
import { ActionIcon, Button, Popover } from '@mantine/core';
import { Calendar, Home, Plane, TrashX } from 'tabler-icons-react';
import { Location } from '../../../types/location';

interface DateFilterProps {
  locations: Location[];
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
}

export const DateFilter = ({ locations, setLocations }: DateFilterProps) => {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [dateRange, setDateRange] = useState<string | null>(null);
  const [originalLocations, setOriginalLocations] = useState<Location[]>([]);

  const resetFilter = () => {
    setValue([null, null]);
    setDateRange(null);
    setLocations(originalLocations);
  };

  useEffect(() => {
    if (originalLocations.length === 0) {
      setOriginalLocations(locations);
    }

    const filteredLocations = locations.filter((location) => {
      const [startDate, endDate] = value;
      const locationStartDate = new Date(location.startDate);
      const locationEndDate = new Date(location.endDate);
      return (
        (!startDate || locationStartDate >= startDate) &&
        (!endDate || locationEndDate <= endDate)
      );
    });

    setLocations(filteredLocations);

    if (value[0] && value[1]) {
      const formattedStartDate = value[0].toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
      });
      const formattedEndDate = value[1].toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
      });
      setDateRange(`${formattedStartDate} - ${formattedEndDate}`);
    } else {
      setDateRange(null);
    }
  }, [value, setLocations, dateRange]);

  return (
    <>
      <Popover position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button
            variant="outline"
            // gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            // radius="xl"
            leftIcon={<Calendar size={18} />}
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
          >
            {dateRange ? dateRange : 'Filter by availability'}
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <DatePicker
            type="range"
            value={value}
            onChange={setValue}
            size="sm"
          />
        </Popover.Dropdown>
      </Popover>
      {dateRange && (
        <ActionIcon
          onClick={resetFilter}
          radius="xl"
          color="red"
          variant="light"
        >
          <TrashX size={18} />
        </ActionIcon>
      )}
    </>
  );
};
