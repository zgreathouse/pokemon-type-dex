import { Injectable } from '@angular/core';
import { POKEMON } from '../../data/pokemon';
import { POKEMON_MOVES } from '../../data/pokemon-moves';
import { POKEMON_TYPE_DETAILS } from '../../data/pokemon-types';
import { PokemonType } from '@types';
import { BehaviorSubject, map, Observable, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private _selectedPokemonType$ = new BehaviorSubject<PokemonType>('Normal');
  selectedPokemonType$ = this._selectedPokemonType$
    .asObservable()
    .pipe(shareReplay(1));

  pokemonOfSelectedType$ = this.selectedPokemonType$.pipe(
    map((selectedPokemonType) =>
      POKEMON.filter(({ typeOne, typeTwo }) =>
        [typeOne, typeTwo].includes(selectedPokemonType)
      )
    )
  );

  pokemonMovesOfSelectedType$ = this.selectedPokemonType$.pipe(
    map((selectedPokemonType) =>
      POKEMON_MOVES.filter(
        (pokemonMove) => pokemonMove.pokemonType === selectedPokemonType
      )
    )
  );

  typeEffectsOfSelectedType$ = this.selectedPokemonType$.pipe(
    map((selectedPokemonType) => this.computeTypeEffects(selectedPokemonType))
  );

  updateSelectedType(pokemonType: PokemonType): void {
    this._selectedPokemonType$.next(pokemonType);
  }

  private computeTypeEffects(pokemonType: PokemonType) {
    const {
      superEffective,
      notVeryEffective,
      ineffective,
      weak,
      resists,
      immune,
    } = POKEMON_TYPE_DETAILS[pokemonType];
    return [
      {
        effect: 'Super effective',
        damageMultiplier: 'x2',
        pokemonTypes: superEffective,
      },
      {
        effect: 'Not very effective',
        damageMultiplier: 'x0.5',
        pokemonTypes: notVeryEffective,
      },
      {
        effect: 'Ineffective',
        damageMultiplier: 'x0',
        pokemonTypes: ineffective,
      },
      {
        effect: 'Weak',
        damageMultiplier: 'x2',
        pokemonTypes: weak,
      },
      {
        effect: 'Resists',
        damageMultiplier: 'x0.5',
        pokemonTypes: resists,
      },
      {
        effect: 'Immune',
        damageMultiplier: 'x0',
        pokemonTypes: immune,
      },
    ];
  }
}
