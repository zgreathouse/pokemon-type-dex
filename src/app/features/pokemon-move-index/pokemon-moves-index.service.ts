import { Injectable } from '@angular/core';
import { PokemonMoveDetail, PokemonType } from '@types';
import { POKEMON_MOVES } from './pokemon-moves';

@Injectable({ providedIn: 'root' })
export class PokemonMovesIndexService {
  fetchPokemonMovesByType(pokemonType: PokemonType): PokemonMoveDetail[] {
    return POKEMON_MOVES.filter(
      (pokemonMove) => pokemonType === pokemonMove.pokemonType
    );
  }
}
