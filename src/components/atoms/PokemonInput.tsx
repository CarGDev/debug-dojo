import React from 'react';
import { Input } from 'antd';

interface PokemonInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const PokemonInput: React.FC<PokemonInputProps> = ({
  value,
  onChange,
  placeholder = 'Enter Pokémon name...'
}) => {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      size="large"
      allowClear
    />
  );
}; 