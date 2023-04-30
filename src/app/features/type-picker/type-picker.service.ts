import { Injectable } from '@angular/core';
import { PokemonType } from 'src/types';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TypePickerService {
  private selectedTypeState$ = new BehaviorSubject<PokemonType>('Normal');
  readonly selectedType$ = this.selectedTypeState$.asObservable();

  updateSelectedType(pokemonType: PokemonType): void {
    this.selectedTypeState$.next(pokemonType);
  }
}
