import React, { useEffect } from 'react';
import { message } from 'antd';
import { SearchBar } from '@components/molecules/SearchBar';
import { PokemonDetails } from '@components/organisms/PokemonDetails';
import { usePokemonStore } from '@stores/pokemonStore';
import styles from '@styles/app.module.scss';

export const Home: React.FC = () => {
  const {
    pokemon,
    loading,
    error,
    searchTerm,
    suggestions,
    suggestionsLoading,
    setSearchTerm,
    fetchPokemon,
    fetchSuggestions,
    loadAllPokemonNames,
    clearError,
  } = usePokemonStore();

  // Load all Pokémon names on component mount
  useEffect(() => {
    loadAllPokemonNames();
  }, [loadAllPokemonNames]);

  const handleSearch = async (value: string) => {
    if (!value.trim()) return;

    try {
      await fetchPokemon(value);
      if (pokemon) {
        message.success(`Found ${pokemon.name}!`);
      }
    } catch (error) {
      console.error('Error in handleSearch:', error);
    }
  };

  const handleSearchTermChange = (value: string) => {
    setSearchTerm(value);
    if (error) {
      clearError();
    }
    // Fetch suggestions as user types
    fetchSuggestions(value);
  };

  const handleSelect = (selectedValue: string) => {
    setSearchTerm(selectedValue);
    handleSearch(selectedValue);
  };

  // Convert suggestions to AutoComplete options format
  const options = suggestions.map(name => ({
    value: name,
    label: name.charAt(0).toUpperCase() + name.slice(1), // Capitalize first letter
  }));

  return (
    <div className={styles.searchSection}>
      <h1>
        Search for your favorite Pokémon!
      </h1>
      
      <SearchBar
        value={searchTerm}
        onChange={handleSearchTermChange}
        onSearch={handleSearch}
        onSelect={handleSelect}
        options={options}
        loading={suggestionsLoading}
      />
      
      {error && (
        <div style={{ color: 'red', textAlign: 'center', marginTop: 16 }}>
          {error}
        </div>
      )}
      
      <PokemonDetails
        pokemon={pokemon}
        loading={loading}
      />
    </div>
  );
}; 