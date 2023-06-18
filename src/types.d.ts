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

export interface PokemonTypeDetail {
  superEffective: PokemonType[];
  notVeryEffective: PokemonType[];
  ineffective: PokemonType[];
}

export type TypeEffect =
  | 'Super effective'
  | 'Not very effective'
  | 'Ineffective'
  | 'Effective'
  | 'Weak'
  | 'Resists'
  | 'Immune';

export type DamageMultiplier = '(x2)' | '(x0.5)' | '(x0)';

export type DetailType = 'Offense' | 'Defense';

export type ResistanceDetail = {
  weak: PokemonType[];
  resists: PokemonType[];
  immune: PokemonType[];
};
