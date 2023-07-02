import { Select, Textarea } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useCallback, useEffect, useMemo,useState } from 'react';
import { BuildingCommunity, Home } from 'tabler-icons-react';

import { FormValues } from '../types/types';

interface BasicInformationProps {
  form: UseFormReturnType<FormValues>;
}

interface AddressSuggestion {
  description: string;
}

export const BasicInformation = ({ form }: BasicInformationProps) => {
  const [addressSuggestions, setAddressSuggestions] = useState<AddressSuggestion[]>([]);
  const [addressSearchValue, setAddressSearchValue] = useState('');
  const [isAddressSearchCleared, setAddressSearchCleared] = useState(false);
  const [isInitialLoad, setInitialLoad] = useState(true);

  const handleAddressSearchChange = useCallback((value: string) => {
    setAddressSearchValue(value);
  }, []);

  useEffect(() => {
    if (isInitialLoad) {
      setInitialLoad(false);
    } else if (addressSearchValue === '') {
      setAddressSearchCleared(true);
    } else {
      setAddressSearchCleared(false);
    }
  }, [addressSearchValue, isInitialLoad]);

  useEffect(() => {
    setAddressSearchValue(form.values.address);
  }, [form.values.address]);

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

  const memoizedAddressSuggestions = useMemo(() => {
    return addressSearchValue ? addressSuggestions.map((suggestion) => suggestion.description) : [];
  }, [addressSearchValue, addressSuggestions]);

  console.log('rendering basic information');

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
        {...form.getInputProps('address')}
        icon={<BuildingCommunity size={20} />}
        label="Street Address"
        description="No need to fill in your house number. This is used to indicate your location on the map for other users to find you."
        required
        onSearchChange={handleAddressSearchChange}
        searchValue={isAddressSearchCleared ? '' : addressSearchValue}
        data={memoizedAddressSuggestions}
        searchable
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
