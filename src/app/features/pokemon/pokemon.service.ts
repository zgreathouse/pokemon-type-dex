import { Injectable } from '@angular/core';
import { PokemonDetail } from '@types';
import { BehaviorSubject } from 'rxjs';
import POKEMON from 'src/pokemon';

@Injectable()
export class PokemonService {
  private filteredPokemonState$ = new BehaviorSubject<PokemonDetail[]>(POKEMON);
  filteredPokemon$ = this.filteredPokemonState$.asObservable();

  updateFilteredPokemon(filteredPokemon: PokemonDetail[]): void {
    this.filteredPokemonState$.next(filteredPokemon);
  }
}
