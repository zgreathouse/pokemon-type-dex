import { Injectable } from '@angular/core';
import { POKEMON } from '../../data/pokemon';
import { POKEMON_MOVES } from '../../data/pokemon-moves';
import { POKEMON_TYPES, POKEMON_TYPE_DETAILS } from '../../data/pokemon-types';
import { PokemonType, ResistanceDetail } from '@types';
import { BehaviorSubject, map, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private selectedPokemonTypeState$ = new BehaviorSubject<PokemonType>(
    'Normal'
  );
  selectedPokemonType$ = this.selectedPokemonTypeState$
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

  // typeEffectsOfSelectedType$ = this.selectedPokemonType$.pipe(
  //   map((selectedPokemonType) => POKEMON_TYPE_DETAILS[selectedPokemonType])
  // );

  updateSelectedType(pokemonType: PokemonType): void {
    this.selectedPokemonTypeState$.next(pokemonType);
  }

  computeOffensiveTypeEffects(pokemonType: PokemonType) {
    const { superEffective, notVeryEffective, ineffective } =
      POKEMON_TYPE_DETAILS[pokemonType];
    return [
      {
        pokemonTypeEffect: `Super effective`,
        pokemonTypes: superEffective,
      },
      {
        pokemonTypeEffect: `Not very effective`,
        pokemonTypes: notVeryEffective,
      },
      {
        pokemonTypeEffect: `Ineffective`,
        pokemonTypes: ineffective,
      },
    ];
  }

  computeDefensiveTypeEffects(pokemonType: PokemonType) {
    const { weak, resists, immune } = POKEMON_TYPE_DETAILS[pokemonType];
    return [
      {
        pokemonTypeEffect: `Weak`,
        pokemonTypes: weak,
      },
      {
        pokemonTypeEffect: `Resists`,
        pokemonTypes: resists,
      },
      {
        pokemonTypeEffect: `Immune`,
        pokemonTypes: immune,
      },
    ];
  }
}
