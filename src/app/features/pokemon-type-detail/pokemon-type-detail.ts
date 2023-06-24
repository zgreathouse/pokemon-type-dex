import { PokemonType, PokemonTypeEffectDetail, ResistanceDetail } from '@types';
import { POKEMON_TYPES } from '../pokemon-type-picker/pokemon-types';

export const getTypeResistances = (
  attackingType: PokemonType
): ResistanceDetail => {
  return POKEMON_TYPES.reduce(
    (acc, type) => {
      const { superEffective, notVeryEffective, ineffective } =
        TYPE_DETAILS[type];
      switch (true) {
        case superEffective.includes(attackingType):
          acc.weak.push(type);
          break;
        case notVeryEffective.includes(attackingType):
          acc.resists.push(type);
          break;
        case ineffective.includes(attackingType):
          acc.immune.push(type);
          break;
      }
      return acc;
    },
    {
      weak: [],
      resists: [],
      immune: [],
    } as ResistanceDetail
  );
};

export const TYPE_DETAILS: Record<PokemonType, PokemonTypeEffectDetail> = {
  Normal: {
    superEffective: [],
    notVeryEffective: ['Rock', 'Steel'],
    ineffective: ['Ghost'],
  },
  Fire: {
    superEffective: ['Bug', 'Grass', 'Ice', 'Steel'],
    notVeryEffective: ['Dragon', 'Fire', 'Rock', 'Water'],
    ineffective: [],
  },
  Water: {
    superEffective: ['Ground', 'Fire', 'Rock'],
    notVeryEffective: ['Grass', 'Dragon', 'Water'],
    ineffective: [],
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
  },
  Electric: {
    superEffective: ['Flying', 'Water'],
    notVeryEffective: ['Dragon', 'Electric', 'Grass'],
    ineffective: ['Ground'],
  },
  Ice: {
    superEffective: ['Dragon', 'Grass', 'Flying', 'Dragon'],
    notVeryEffective: ['Fire', 'Ice', 'Steel', 'Water'],
    ineffective: [],
  },
  Fighting: {
    superEffective: ['Dark', 'Ice', 'Normal', 'Rock', 'Steel'],
    notVeryEffective: ['Bug', 'Fairy', 'Flying', 'Poison', 'Psychic'],
    ineffective: ['Ghost'],
  },
  Poison: {
    superEffective: ['Fairy', 'Grass'],
    notVeryEffective: ['Ground', 'Rock', 'Ghost'],
    ineffective: ['Steel'],
  },
  Ground: {
    superEffective: ['Electric', 'Fire', 'Poison', 'Rock', 'Steel'],
    notVeryEffective: ['Bug', 'Grass'],
    ineffective: ['Flying'],
  },
  Flying: {
    superEffective: ['Bug', 'Grass', 'Fighting'],
    notVeryEffective: ['Electric', 'Rock', 'Steel'],
    ineffective: [],
  },
  Psychic: {
    superEffective: ['Fighting', 'Poison'],
    notVeryEffective: ['Psychic', 'Steel'],
    ineffective: ['Dark'],
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
  },
  Rock: {
    superEffective: ['Bug', 'Fire', 'Flying', 'Ice'],
    notVeryEffective: ['Ground', 'Fighting', 'Steel'],
    ineffective: [],
  },
  Ghost: {
    superEffective: ['Ghost', 'Psychic'],
    notVeryEffective: ['Dark'],
    ineffective: ['Normal'],
  },
  Dark: {
    superEffective: ['Ghost', 'Psychic'],
    notVeryEffective: ['Dark', 'Fairy', 'Fighting'],
    ineffective: ['Psychic'],
  },
  Dragon: {
    superEffective: ['Dragon'],
    notVeryEffective: ['Steel'],
    ineffective: ['Fairy'],
  },
  Steel: {
    superEffective: ['Fairy', 'Ice', 'Rock'],
    notVeryEffective: ['Electric', 'Fire', 'Steel', 'Water'],
    ineffective: [],
  },
  Fairy: {
    superEffective: ['Dark', 'Dragon', 'Fighting'],
    notVeryEffective: ['Fighting', 'Poison', 'Steel'],
    ineffective: [],
  },
};
