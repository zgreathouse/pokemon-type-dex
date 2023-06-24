import { Injectable } from '@angular/core';
import { PokemonType } from '@types';
import { BehaviorSubject, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonTypePickerService {
  private selectedPokemonTypeState$ = new BehaviorSubject<PokemonType>(
    'Normal'
  );
  readonly selectedPokemonType$ = this.selectedPokemonTypeState$
    .asObservable()
    .pipe(shareReplay(1));

  updateSelectedType(pokemonType: PokemonType): void {
    this.selectedPokemonTypeState$.next(pokemonType);
  }
}
