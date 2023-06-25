import { Injectable } from '@angular/core';
import { PokemonDetail, PokemonType } from '@types';
import { POKEMON } from 'src/app/features/pokemon-index/pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonIndexService {
  fetchPokemonByType(pokemonType: PokemonType): PokemonDetail[] {
    return POKEMON.filter(({ typeOne, typeTwo }) =>
      [typeOne, typeTwo].includes(pokemonType)
    );
  }
}
