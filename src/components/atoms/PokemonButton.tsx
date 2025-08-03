import React from 'react';
import { Button } from 'antd';

interface PokemonButtonProps {
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
}

export const PokemonButton: React.FC<PokemonButtonProps> = ({
  onClick,
  loading = false,
  disabled = false,
  children,
  type = 'primary'
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      size="large"
    >
      {children}
    </Button>
  );
}; 