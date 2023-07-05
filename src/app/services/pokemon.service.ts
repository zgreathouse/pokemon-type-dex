import { Injectable } from '@angular/core';
import { POKEMON } from '@data/pokemon';
import { POKEMON_MOVES } from '@data/pokemon-moves';
import { POKEMON_TYPE_DETAILS } from '@data/pokemon-types';
import { PokemonType, PokemonTypeEffectDetail } from '@types';
import { BehaviorSubject, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private _selectedPokemonType$ = new BehaviorSubject<PokemonType>('Normal');
  selectedPokemonType$ = this._selectedPokemonType$
    .asObservable()
    .pipe(shareReplay(1));

  updateSelectedPokemonType(pokemonType: PokemonType): void {
    this._selectedPokemonType$.next(pokemonType);
  }

  typeEffectsOfSelectedType$ = this.selectedPokemonType$.pipe(
    map((selectedPokemonType) => this.computeTypeEffects(selectedPokemonType))
  );

  pokemonOfSelectedType$ = this.selectedPokemonType$.pipe(
    map((selectedPokemonType) =>
      POKEMON.filter(({ typeOne, typeTwo }) =>
        [typeOne, typeTwo].includes(selectedPokemonType)
      )
    )
  );

  movesOfSelectedType$ = this.selectedPokemonType$.pipe(
    map((selectedPokemonType) =>
      POKEMON_MOVES.filter(
        ({ pokemonType }) => pokemonType === selectedPokemonType
      )
    )
  );

  private computeTypeEffects(
    pokemonType: PokemonType
  ): PokemonTypeEffectDetail[] {
    return [
      {
        effect: 'Super effective',
        damageMultiplier: 'x2',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].superEffective,
      },
      {
        effect: 'Not very effective',
        damageMultiplier: 'x0.5',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].notVeryEffective,
      },
      {
        effect: 'Ineffective',
        damageMultiplier: 'x0',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].ineffective,
      },
      {
        effect: 'Weak',
        damageMultiplier: 'x2',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].weak,
      },
      {
        effect: 'Resists',
        damageMultiplier: 'x0.5',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].resists,
      },
      {
        effect: 'Immune',
        damageMultiplier: 'x0',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].immune,
      },
    ];
  }
}
