import React from 'react';
import { AutoComplete, Input } from 'antd';
import type { AutoCompleteProps } from 'antd';

interface PokemonAutoCompleteProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  options: { value: string; label: string }[];
  loading?: boolean;
  placeholder?: string;
  onSelect?: (value: string) => void;
}

export const PokemonAutoComplete: React.FC<PokemonAutoCompleteProps> = ({
  value,
  onChange,
  onSearch,
  options,
  loading = false,
  placeholder = 'Enter Pokémon name...',
  onSelect,
}) => {
  const handleSearch = (searchText: string) => {
    onChange(searchText);
    onSearch(searchText);
  };

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    onSelect?.(selectedValue);
  };

  return (
    <AutoComplete
      value={value}
      options={options}
      onSearch={handleSearch}
      onSelect={handleSelect}
      onChange={onChange}
      placeholder={placeholder}
      style={{ width: '100%' }}
      notFoundContent={loading ? 'Loading...' : 'No Pokémon found'}
      filterOption={false} // Disable built-in filtering since we handle it in the store
    >
      <Input.Search
        size="large"
        allowClear
        loading={loading}
        enterButton
      />
    </AutoComplete>
  );
}; 