import React from 'react';
import { PokemonAutoComplete } from '@components/atoms/PokemonAutoComplete';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  onSelect?: (value: string) => void;
  options: { value: string; label: string }[];
  loading?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
  onSelect,
  options,
  loading = false
}) => {
  return (
    <PokemonAutoComplete
      value={value}
      onChange={onChange}
      onSearch={onSearch}
      onSelect={onSelect}
      options={options}
      loading={loading}
      placeholder="Enter Pokémon name..."
    />
  );
}; 