import { Injectable } from '@angular/core';
import { PokemonType } from '@types';
import POKEMON from 'src/app/features/pokemon-index/pokemon';

@Injectable()
export class PokemonService {
  fetchPokemonByType(pokemonType: PokemonType) {
    return POKEMON.filter(({ typeOne, typeTwo }) =>
      [typeOne, typeTwo].includes(pokemonType)
    );
  }
}
