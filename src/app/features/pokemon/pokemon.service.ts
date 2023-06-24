import { Injectable } from '@angular/core';
import POKEMON from 'src/pokemon';

@Injectable()
export class PokemonService {
  fetchPokemon() {
    // TODO: will eventually fetch poke on from a server
    return POKEMON;
  }
}
