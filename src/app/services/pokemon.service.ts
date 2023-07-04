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

  private doubleDamageMultiplier = '(x2)';
  private halfDamageMultiplier = '(x0.5)';
  private noDamageMultiplier = '(x0)';

  constructor() {}

  updateSelectedType(pokemonType: PokemonType): void {
    this.selectedPokemonTypeState$.next(pokemonType);
  }

  computeOffensiveTypeEffects(pokemonType: PokemonType) {
    const { superEffective, notVeryEffective, ineffective } =
      POKEMON_TYPE_DETAILS[pokemonType];
    return [
      {
        pokemonTypeEffect: `Super effective ${this.doubleDamageMultiplier}`,
        pokemonTypes: superEffective,
      },
      {
        pokemonTypeEffect: `Not very effective ${this.halfDamageMultiplier}`,
        pokemonTypes: notVeryEffective,
      },
      {
        pokemonTypeEffect: `Ineffective ${this.noDamageMultiplier}`,
        pokemonTypes: ineffective,
      },
    ];
  }

  computeDefensiveTypeEffects(pokemonType: PokemonType) {
    const { weak, resists, immune } = this.getTypeResistances(pokemonType);
    return [
      {
        pokemonTypeEffect: `Weak ${this.doubleDamageMultiplier}`,
        pokemonTypes: weak,
      },
      {
        pokemonTypeEffect: `Resists ${this.halfDamageMultiplier}`,
        pokemonTypes: resists,
      },
      {
        pokemonTypeEffect: `Immune ${this.noDamageMultiplier}`,
        pokemonTypes: immune,
      },
    ];
  }

  private getTypeResistances(attackingType: PokemonType): ResistanceDetail {
    return POKEMON_TYPES.reduce(
      (acc, type) => {
        const { superEffective, notVeryEffective, ineffective } =
          POKEMON_TYPE_DETAILS[type];
        if (superEffective.includes(attackingType)) {
          acc.weak.push(type);
        } else if (notVeryEffective.includes(attackingType)) {
          acc.resists.push(type);
        } else if (ineffective.includes(attackingType)) {
          acc.immune.push(type);
        }
        return acc;
      },
      {
        weak: [],
        resists: [],
        immune: [],
      } as ResistanceDetail
    );
  }
}
