export type PokemonType =
  | 'Normal'
  | 'Fire'
  | 'Water'
  | 'Grass'
  | 'Electric'
  | 'Ice'
  | 'Fighting'
  | 'Poison'
  | 'Ground'
  | 'Flying'
  | 'Psychic'
  | 'Bug'
  | 'Rock'
  | 'Ghost'
  | 'Dark'
  | 'Dragon'
  | 'Steel'
  | 'Fairy';

export type PokemonTypeColor =
  | '#ADA494' // Normal
  | '#F75131' // Fire
  | '#399CFF' // Water
  | '#7BCE52' // Grass
  | '#FFC631' // Electric
  | '#98D8D8' // Ice
  | '#A45139' // Fighting
  | '#B45AA4' // Poison
  | '#D6B55A' // Ground
  | '#BDAFF6' // Flying
  | '#FF72A5' // Psychic
  | '#A8B81F' // Bug
  | '#BDA55A' // Rock
  | '#514773' // Ghost
  | '#735A4A' // Dark
  | '#7038F8' // Dragon
  | '#A8A29D' // Steel
  | '#F7B5F7'; // Fairy

export type EffectPerspective = 'Offense' | 'Defense';

export type Effect =
  | 'Super effective'
  | 'Effective'
  | 'Not very effective'
  | 'Ineffective'
  | '(Double) Weak'
  | 'Weak'
  | 'Neutral'
  | 'Resists'
  | '(Double) Resists'
  | 'Immune';

export type PokemonTypeEffectDetail = {
  types: PokemonType[];
  effect: Effect;
  damageMultiplier: 'x4' | 'x2' | 'x1' | 'x0.5' | 'x0.25' | 'x0';
  pokemonTypes: PokemonType[];
};

export type PokemonTypeEffects = {
  superEffective: PokemonType[];
  notVeryEffective: PokemonType[];
  ineffective: PokemonType[];
  effective: PokemonType[];
  weak: PokemonType[];
  neutral: PokemonType[];
  resists: PokemonType[];
  immune: PokemonType[];
};

export type PokemonDetail = {
  id: string;
  sprite: string;
  name: string;
  typeOne: PokemonType;
  typeTwo: PokemonType | null;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  totalBaseStat?: number;
};

export type PokemonMoveCategory = 'Physical' | 'Special' | 'Status' | '—';

export type PokemonMoveDetail = {
  name: string;
  pokemonType: PokemonType;
  category: PokemonMoveCategory;
  power: string;
  accuracy: string;
  pp: string;
  effect: string;
  probability: string | null;
};
