import { Checkbox, SimpleGrid } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FormValues } from '../types/types';

export const Amenities = ({
  form,
}: {
  form: UseFormReturnType<FormValues>;
}) => {
  return (
    <SimpleGrid cols={3} spacing="xs">
      <Checkbox
        label="Washer"
        {...form.getInputProps('amenities.washer', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="Dryer"
        {...form.getInputProps('amenities.dryer', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="Air Conditioning"
        {...form.getInputProps('amenities.airConditioning', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="TV"
        {...form.getInputProps('amenities.tv', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="Free Parking"
        {...form.getInputProps('amenities.parking', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="Workspace"
        {...form.getInputProps('amenities.workspace', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="Iron"
        {...form.getInputProps('amenities.iron', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="Hair Dryer"
        {...form.getInputProps('amenities.hairDryer', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="Towels, bed sheets"
        {...form.getInputProps('amenities.essentials', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="Gaming Console"
        {...form.getInputProps('amenities.gamingConsole', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="Projector"
        {...form.getInputProps('amenities.projector', {
          type: 'checkbox',
        })}
      />
      <Checkbox
        label="Home Gym"
        {...form.getInputProps('amenities.homeGym', {
          type: 'checkbox',
        })}
      />
    </SimpleGrid>
  );
};
