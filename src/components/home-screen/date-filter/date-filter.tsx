import { DatePicker } from '@mantine/dates';
import * as Styled from './date-filter.style';
import { useState } from 'react';
import { Button, Popover } from '@mantine/core';
import { Calendar, Home, Plane } from 'tabler-icons-react';

export const DateFilter = () => {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  const dateRange = value
    .filter((date) => date !== null)
    .map((date) =>
      date?.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
      })
    )
    .join(' - ');

  return (
    <Popover position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button
          variant="gradient"
          gradient={{ from: 'teal', to: 'blue', deg: 60 }}
          radius="xl"
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
        <DatePicker type="range" value={value} onChange={setValue} size="sm" />
      </Popover.Dropdown>
    </Popover>
  );
};
