import api from '../config';
import type { Pokemon } from '@pokemonTypes/pokemon';

export const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const response = await api.get<Pokemon>(`/pokemon/${name.toLowerCase()}`);
    return response.data;
  } catch (error) {
    // Intentional bug #1: No proper error handling for non-existent Pokémon
    console.error('Error fetching Pokémon:', error);
    throw error;
  }
};

export const getPokemonList = async (limit: number = 20, offset: number = 0) => {
  try {
    const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw error;
  }
};

export const getAllPokemonNames = async (): Promise<string[]> => {
  try {
    // Fetch all Pokémon names (151 total in the original Pokédex)
    const response = await api.get('/pokemon?limit=151&offset=0');
    return response.data.results.map((pokemon: { name: string }) => pokemon.name);
  } catch (error) {
    console.error('Error fetching all Pokémon names:', error);
    return [];
  }
}; 