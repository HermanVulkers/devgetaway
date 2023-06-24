import { Select, Textarea, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { BuildingCommunity, Home } from 'tabler-icons-react';
import { FormValues } from '../types/types';
import { useEffect, useState } from 'react';

interface BasicInformationProps {
  form: UseFormReturnType<FormValues>;
}

interface AddressSuggestion {
  description: string;
}

export const BasicInformation = ({ form }: BasicInformationProps) => {
  const [addressSuggestions, setAddressSuggestions] = useState<
    AddressSuggestion[]
  >([]);
  const [addressSearchValue, onAddressSearchChange] = useState('');

  useEffect(() => {
    if (addressSearchValue) {
      fetch(`/api/address-autocomplete?input=${addressSearchValue}`)
        .then((response) => response.json())
        .then((data) => {
          setAddressSuggestions(data.predictions);
        })
        .catch((error) => {
          console.error('Error fetching suggestions', error);
        });
    }
  }, [addressSearchValue]);

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
        label="Street Address"
        description="No need to fill in your house number. This is used to indicate your location on the map for other users to find you. "
        radius="md"
        placeholder={form.values.address || 'Search for your address'}
        required
        onSearchChange={onAddressSearchChange}
        searchValue={addressSearchValue}
        data={addressSuggestions.map((suggestion) => suggestion.description)}
        searchable
        {...form.getInputProps('address')}
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
