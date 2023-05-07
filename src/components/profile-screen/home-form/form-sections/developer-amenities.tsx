import { Checkbox, Select, SimpleGrid, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FormValues } from '../types/types';
import { AppWindow, Wifi } from 'tabler-icons-react';

export const DeveloperAmenities = ({
  form,
}: {
  form: UseFormReturnType<FormValues>;
}) => {
  return (
    <SimpleGrid cols={2} spacing="xs">
      <TextInput
        icon={<Wifi size={20} />}
        label="Internet speed (Mbps)"
        {...form.getInputProps('developerAmenities.internetSpeed')}
      />
      <Select
        icon={<AppWindow size={20} />}
        label="External monitors available"
        data={['0', '1', '2', '3']}
        {...form.getInputProps('developerAmenities.externalMonitors')}
      />
      <Checkbox
        label="Ergonomic chair"
        {...form.getInputProps('developerAmenities.ergonomicChair', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="Standing desk"
        {...form.getInputProps('developerAmenities.standingDesk', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="Laptop stand"
        {...form.getInputProps('developerAmenities.laptopStand', {
          type: 'checkbox',
        })}
      />
    </SimpleGrid>
  );
};
