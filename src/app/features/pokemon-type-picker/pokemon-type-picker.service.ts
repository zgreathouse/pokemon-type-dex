import { Injectable } from '@angular/core';
import { PokemonType } from '@types';
import { BehaviorSubject, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonTypePickerService {
  private selectedTypeState$ = new BehaviorSubject<PokemonType>('Normal');
  readonly selectedType$ = this.selectedTypeState$
    .asObservable()
    .pipe(shareReplay(1));

  updateSelectedType(pokemonType: PokemonType): void {
    this.selectedTypeState$.next(pokemonType);
  }
}
