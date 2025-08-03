import { create } from 'zustand';
import { getPokemon, getAllPokemonNames } from '@api/get/pokemon';
import type { Pokemon } from '@pokemonTypes/pokemon';

interface PokemonState {
  // State
  pokemon: Pokemon | null;
  loading: boolean;
  error: string | null;
  searchTerm: string;
  suggestions: string[];
  suggestionsLoading: boolean;
  
  // Actions
  setPokemon: (pokemon: Pokemon | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSearchTerm: (term: string) => void;
  setSuggestions: (suggestions: string[]) => void;
  setSuggestionsLoading: (loading: boolean) => void;
  
  // Async actions
  fetchPokemon: (name: string) => Promise<void>;
  fetchSuggestions: (searchTerm: string) => Promise<void>;
  loadAllPokemonNames: () => Promise<void>;
  clearPokemon: () => void;
  clearError: () => void;
  clearSuggestions: () => void;
}

export const usePokemonStore = create<PokemonState>((set, get) => ({
  // Initial state
  pokemon: null,
  loading: false,
  error: null,
  searchTerm: '',
  suggestions: [],
  suggestionsLoading: false,
  
  // Actions
  setPokemon: (pokemon) => set({ pokemon }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  setSuggestions: (suggestions) => set({ suggestions }),
  setSuggestionsLoading: (suggestionsLoading) => set({ suggestionsLoading }),
  
  // Async actions
  fetchPokemon: async (name: string) => {
    const { setLoading, setPokemon, setError } = get();
    
    if (!name.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Intentional bug #2: UI flickering
      // Setting pokemon to null first causes the previous data to disappear briefly
      setPokemon(null);
      
      const pokemon = await getPokemon(name);
      setPokemon(pokemon);
    } catch (error) {
      // Intentional bug #1: No error handling for non-existent Pokémon
      // This will set a generic error message instead of handling specific cases
      setError('Failed to fetch Pokémon data');
      console.error('Error in fetchPokemon:', error);
    } finally {
      setLoading(false);
    }
  },
  
  fetchSuggestions: async (searchTerm: string) => {
    const { setSuggestions, setSuggestionsLoading } = get();
    
    if (!searchTerm.trim()) {
      setSuggestions([]);
      return;
    }
    
    setSuggestionsLoading(true);
    
    try {
      const allNames = await getAllPokemonNames();
      const filtered = allNames
        .filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 10); // Limit to 10 suggestions
      setSuggestions(filtered);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    } finally {
      setSuggestionsLoading(false);
    }
  },
  
  loadAllPokemonNames: async () => {
    const { setSuggestions, setSuggestionsLoading } = get();
    
    setSuggestionsLoading(true);
    
    try {
      const allNames = await getAllPokemonNames();
      setSuggestions(allNames);
    } catch (error) {
      console.error('Error loading all Pokémon names:', error);
      setSuggestions([]);
    } finally {
      setSuggestionsLoading(false);
    }
  },
  
  clearPokemon: () => set({ pokemon: null }),
  clearError: () => set({ error: null }),
  clearSuggestions: () => set({ suggestions: [] }),
})); 