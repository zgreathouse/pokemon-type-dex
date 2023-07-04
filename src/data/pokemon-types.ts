import { PokemonType, PokemonTypeEffectDetail } from '@types';

export const POKEMON_TYPES: PokemonType[] = [
  'Normal',
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Ice',
  'Fighting',
  'Poison',
  'Ground',
  'Flying',
  'Psychic',
  'Bug',
  'Rock',
  'Ghost',
  'Dark',
  'Dragon',
  'Steel',
  'Fairy',
];

export const POKEMON_TYPE_DETAILS: Record<
  PokemonType,
  PokemonTypeEffectDetail
> = {
  Normal: {
    superEffective: [],
    notVeryEffective: ['Rock', 'Steel'],
    ineffective: ['Ghost'],
    weak: ['Fighting'],
    resists: [],
    immune: ['Ghost'],
  },
  Fire: {
    superEffective: ['Bug', 'Grass', 'Ice', 'Steel'],
    notVeryEffective: ['Dragon', 'Fire', 'Rock', 'Water'],
    ineffective: [],
    weak: ['Ground', 'Rock', 'Water'],
    resists: ['Bug', 'Fairy', 'Fire', 'Grass', 'Ice', 'Steel'],
    immune: [],
  },
  Water: {
    superEffective: ['Ground', 'Fire', 'Rock'],
    notVeryEffective: ['Grass', 'Dragon', 'Water'],
    ineffective: [],
    weak: ['Grass', 'Electric'],
    resists: ['Fire', 'Ice', 'Steel', 'Water'],
    immune: [],
  },
  Grass: {
    superEffective: ['Ground', 'Rock', 'Water'],
    notVeryEffective: [
      'Bug',
      'Dragon',
      'Fire',
      'Flying',
      'Grass',
      'Poison',
      'Steel',
    ],
    ineffective: [],
    weak: ['Bug', 'Fire', 'Flying', 'Ice', 'Poison'],
    resists: ['Electric', 'Grass', 'Ground', 'Water'],
    immune: [],
  },
  Electric: {
    superEffective: ['Flying', 'Water'],
    notVeryEffective: ['Dragon', 'Electric', 'Grass'],
    ineffective: ['Ground'],
    weak: ['Ground'],
    resists: ['Electric', 'Flying', 'Steel'],
    immune: [],
  },
  Ice: {
    superEffective: ['Dragon', 'Grass', 'Flying', 'Dragon'],
    notVeryEffective: ['Fire', 'Ice', 'Steel', 'Water'],
    ineffective: [],
    weak: ['Fighting', 'Fire', 'Rock', 'Steel'],
    resists: ['Ice'],
    immune: [],
  },
  Fighting: {
    superEffective: ['Dark', 'Ice', 'Normal', 'Rock', 'Steel'],
    notVeryEffective: ['Bug', 'Fairy', 'Flying', 'Poison', 'Psychic'],
    ineffective: ['Ghost'],
    weak: ['Fairy', 'Flying', 'Psychic'],
    resists: ['Bug', 'Dark', 'Rock'],
    immune: [],
  },
  Poison: {
    superEffective: ['Fairy', 'Grass'],
    notVeryEffective: ['Ground', 'Rock', 'Ghost'],
    ineffective: ['Steel'],
    weak: ['Ground', 'Psychic'],
    resists: ['Bug', 'Grass', 'Fairy', 'Fighting'],
    immune: [],
  },
  Ground: {
    superEffective: ['Electric', 'Fire', 'Poison', 'Rock', 'Steel'],
    notVeryEffective: ['Bug', 'Grass'],
    ineffective: ['Flying'],
    weak: ['Grass', 'Water'],
    resists: ['Poison', 'Rock'],
    immune: ['Electric'],
  },
  Flying: {
    superEffective: ['Bug', 'Grass', 'Fighting'],
    notVeryEffective: ['Electric', 'Rock', 'Steel'],
    ineffective: [],
    weak: ['Electric', 'Ice', 'Rock'],
    resists: ['Bug', 'Fighting', 'Grass'],
    immune: ['Ground'],
  },
  Psychic: {
    superEffective: ['Fighting', 'Poison'],
    notVeryEffective: ['Psychic', 'Steel'],
    ineffective: ['Dark'],
    weak: ['Bug', 'Dark', 'Ghost'],
    resists: ['Fighting', 'Psychic'],
    immune: [],
  },
  Bug: {
    superEffective: ['Dark', 'Grass', 'Psychic'],
    notVeryEffective: [
      'Fairy',
      'Fighting',
      'Fire',
      'Flying',
      'Ghost',
      'Poison',
      'Steel',
    ],
    ineffective: [],
    weak: ['Fire', 'Flying', 'Rock'],
    resists: ['Fighting', 'Grass', 'Ground'],
    immune: [],
  },
  Rock: {
    superEffective: ['Bug', 'Fire', 'Flying', 'Ice'],
    notVeryEffective: ['Ground', 'Fighting', 'Steel'],
    ineffective: [],
    weak: ['Fighting', 'Grass', 'Ground', 'Steel', 'Water'],
    resists: ['Fire', 'Flying', 'Normal', 'Poison'],
    immune: [],
  },
  Ghost: {
    superEffective: ['Ghost', 'Psychic'],
    notVeryEffective: ['Dark'],
    ineffective: ['Normal'],
    weak: ['Dark', 'Ghost'],
    resists: ['Bug', 'Poison'],
    immune: ['Fighting', 'Normal'],
  },
  Dark: {
    superEffective: ['Ghost', 'Psychic'],
    notVeryEffective: ['Dark', 'Fairy', 'Fighting'],
    ineffective: [],
    weak: ['Fairy', 'Fighting', 'Bug'],
    resists: ['Dark', 'Ghost'],
    immune: ['Psychic'],
  },
  Dragon: {
    superEffective: ['Dragon'],
    notVeryEffective: ['Steel'],
    ineffective: ['Fairy'],
    weak: ['Fairy', 'Ice', 'Dragon'],
    resists: ['Electric', 'Fire', 'Grass', 'Water'],
    immune: [],
  },
  Steel: {
    superEffective: ['Fairy', 'Ice', 'Rock'],
    notVeryEffective: ['Electric', 'Fire', 'Steel', 'Water'],
    ineffective: [],
    weak: ['Fire', 'Fighting', 'Ground'],
    resists: [
      'Bug',
      'Dragon',
      'Fairy',
      'Flying',
      'Grass',
      'Ice',
      'Normal',
      'Psychic',
      'Rock',
      'Steel',
    ],
    immune: ['Poison'],
  },
  Fairy: {
    superEffective: ['Dark', 'Dragon', 'Fighting'],
    notVeryEffective: ['Fire', 'Poison', 'Steel'],
    ineffective: [],
    weak: ['Poison', 'Steel'],
    resists: ['Bug', 'Dark', 'Fighting'],
    immune: ['Dragon'],
  },
};
