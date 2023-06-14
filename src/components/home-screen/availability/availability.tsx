import { DatePicker } from '@mantine/dates';
import * as Styled from './availability.style';
import { useState } from 'react';
import { Button, Popover } from '@mantine/core';

export const Availability = () => {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  // Take the date values and convert to a string in this format "DD MMM - DD MMM"

  const dateRange = value
    .map((date) =>
      date?.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
      })
    )
    .join(' - ');

  return (
    <Styled.Container>
      <p>Date filter: </p>
      <Popover position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button variant="outline" compact>
            {dateRange}
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
    </Styled.Container>
  );
};
