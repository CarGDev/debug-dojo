# Pokémon Explorer App

A Vite + React + TypeScript application that allows users to search for Pokémon and view their details using the PokeAPI.

## Features

- Search for Pokémon by name with autocomplete suggestions
- Display Pokémon details including:
  - Name and image
  - Types
  - Base stats with progress bars
  - Height and weight
- Modern UI built with Ant Design
- Atomic Design architecture
- Centralized state management with Zustand
- API layer with axios for data fetching

## Project Structure

```
src/
├── api/                # API layer with axios
│   ├── config.ts       # Axios configuration
│   ├── get/            # GET requests
│   ├── post/           # POST requests
│   ├── put/            # PUT requests
│   ├── delete/         # DELETE requests
│   └── index.ts        # API exports
├── components/
│   ├── atoms/          # Basic UI elements (Input, Button, AutoComplete)
│   ├── molecules/      # Combinations (SearchBar)
│   ├── organisms/      # Complex components (PokemonDetails)
│   ├── templates/      # Layout structure (MainLayout)
│   └── pages/          # Route-level views (Home)
├── stores/             # Zustand state management
│   ├── pokemonStore.ts # Pokémon state store
│   └── index.ts        # Store exports
├── styles/             # SCSS modules
│   ├── global.module.scss  # Global styles
│   ├── app.module.scss     # App-specific styles
│   └── index.ts            # Style exports
└── types/              # TypeScript type definitions
```

## Path Aliases

The project uses path aliases for cleaner imports:

- `@/` - Points to `src/`
- `@components/` - Points to `src/components/`
- `@styles/` - Points to `src/styles/`
- `@pokemonTypes/` - Points to `src/types/`
- `@api/` - Points to `src/api/`
- `@stores/` - Points to `src/stores/`

Example usage:
```typescript
// Instead of: import { PokemonInput } from '../../components/atoms/PokemonInput';
import { PokemonInput } from '@components/atoms/PokemonInput';

// Instead of: import styles from '../../styles/app.module.scss';
import styles from '@styles/app.module.scss';

// Instead of: import { getPokemon } from '../../api/get/pokemon';
import { getPokemon } from '@api/get/pokemon';

// Instead of: import { usePokemonStore } from '../../stores/pokemonStore';
import { usePokemonStore } from '@stores/pokemonStore';
```

## Intentional Bugs (For Debugging Session)

⚠️ **These bugs are intentionally left in the code for debugging practice:**

1. **Silent Failure**: When a Pokémon doesn't exist, no error message is shown - the app silently fails
2. **UI Flickering**: When searching for a new Pokémon, the previous data briefly disappears causing a flicker effect
3. **Incorrect Stat Mapping**: Speed and defense stats are swapped in the display
4. **TypeScript Error**: The `height` field is assumed to always be present when it's actually optional in the API

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the URL shown in the terminal

## Usage

1. Enter a Pokémon name in the search bar (e.g., "pikachu", "charizard", "bulbasaur")
2. Click "Search" or press Enter
3. View the Pokémon's details including stats, types, and image

## Technologies Used

- **Vite** - Build tool and dev server
- **React** - UI framework
- **TypeScript** - Type safety
- **Ant Design** - UI component library
- **PokeAPI** - Pokémon data source

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
