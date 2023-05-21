import { Select, Textarea, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { BuildingCommunity, Home } from 'tabler-icons-react';
import { FormValues } from '../types/types';
import { useEffect, useState } from 'react';

interface BasicInformationProps {
  form: UseFormReturnType<FormValues>;
}

interface CitySuggestion {
  description: string;
}

export const BasicInformation = ({ form }: BasicInformationProps) => {
  const [citySuggestions, setCitySuggestions] = useState<CitySuggestion[]>([]);
  const [citySearchValue, onCitySearchChange] = useState('');

  useEffect(() => {
    if (citySearchValue) {
      fetch(
        `/api/city-autocomplete?input=${encodeURIComponent(citySearchValue)}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCitySuggestions(data.predictions);
        })
        .catch((error) => {
          console.error('Error fetching suggestions', error);
        });
    }
  }, [citySearchValue]);

  return (
    <>
      <Textarea
        placeholder="Describe your home"
        label="Description"
        autosize
        minRows={2}
        {...form.getInputProps('description')}
        required
      />
      <Select
        icon={<BuildingCommunity size={20} />}
        label="City"
        description="This is used to indicate your location on the map for other users to find you."
        radius="md"
        placeholder={form.values.city || 'Search for your city'}
        required
        onSearchChange={onCitySearchChange}
        searchValue={citySearchValue}
        data={citySuggestions.map((suggestion) => suggestion.description)}
        searchable
        {...form.getInputProps('city')}
      />
      <Select
        icon={<Home size={20} />}
        label="Property Type"
        data={['Apartment', 'House', 'Studio']}
        {...form.getInputProps('propertyType')}
      />
    </>
  );
};
