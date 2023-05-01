import { PokemonType, PokemonTypeDetail } from '@types';

export const TYPE_DETAILS: Record<PokemonType, PokemonTypeDetail> = {
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
    weak: ['Electric', 'Grass'],
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
    resists: ['Fairy', 'Fighting', 'Grass', 'Poison'],
    immune: [],
  },
  Ground: {
    superEffective: ['Electric', 'Fire', 'Poison', 'Rock', 'Steel'],
    notVeryEffective: ['Bug', 'Grass'],
    ineffective: ['Flying'],
    weak: ['Grass', 'Ice', 'Water'],
    resists: ['Rock', 'Poison'],
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
    resists: ['Grass', 'Ground', 'Fighting'],
    immune: [],
  },
  Rock: {
    superEffective: ['Bug', 'Fire', 'Flying', 'Ice'],
    notVeryEffective: ['Ground', 'Fighting', 'Steel'],
    ineffective: [],
    weak: ['Grass', 'Ground', 'Fighting', 'Steel', 'Water'],
    resists: ['Normal', 'Fire', 'Flying', 'Poison'],
    immune: [],
  },
  Ghost: {
    superEffective: ['Ghost', 'Psychic'],
    notVeryEffective: ['Dark'],
    ineffective: ['Normal'],
    weak: ['Dark', 'Ghost'],
    resists: ['Bug', 'Poison'],
    immune: ['Normal', 'Fighting'],
  },
  Dark: {
    superEffective: ['Ghost', 'Psychic'],
    notVeryEffective: ['Dark', 'Fairy', 'Fighting'],
    ineffective: ['Psychic'],
    weak: ['Bug', 'Fairy', 'Fighting'],
    resists: ['Dark', 'Ghost'],
    immune: [],
  },
  Dragon: {
    superEffective: ['Dragon'],
    notVeryEffective: ['Steel'],
    ineffective: ['Fairy'],
    weak: ['Dragon', 'Fairy', 'Ice'],
    resists: ['Electric', 'Grass', 'Fire', 'Water'],
    immune: [],
  },
  Steel: {
    superEffective: ['Fairy', 'Ice', 'Rock'],
    notVeryEffective: ['Electric', 'Fire', 'Steel', 'Water'],
    ineffective: [],
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
    weak: ['Ground', 'Fighting', 'Fire'],
    immune: [],
  },
  Fairy: {
    superEffective: ['Dark', 'Dragon', 'Fighting'],
    notVeryEffective: ['Fighting', 'Poison', 'Steel'],
    ineffective: [],
    weak: ['Poison', 'Steel'],
    resists: ['Bug', 'Dark', 'Fighting'],
    immune: ['Dragon'],
  },
};
