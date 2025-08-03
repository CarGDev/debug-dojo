export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  front_shiny?: string;
  back_default?: string;
  back_shiny?: string;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number; // Intentional bug: height is actually optional in the API
  weight: number;
  types: PokemonType[];
  stats: PokemonStat[];
  sprites: PokemonSprites;
  base_experience?: number;
}

export interface PokemonApiResponse {
  data: Pokemon;
  status: number;
} 