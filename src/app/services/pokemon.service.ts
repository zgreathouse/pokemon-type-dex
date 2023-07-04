import { Injectable } from '@angular/core';
import { POKEMON } from '../features/pokemon-index/pokemon';
import { POKEMON_MOVES } from '../features/pokemon-move-index/pokemon-moves';
import {
  POKEMON_TYPES,
  TYPE_DETAILS,
} from '../features/pokemon-type-picker/pokemon-types';
import {
  PokemonDetail,
  PokemonMoveDetail,
  PokemonType,
  ResistanceDetail,
} from '@types';
import { BehaviorSubject, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private selectedPokemonTypeState$ = new BehaviorSubject<PokemonType>(
    'Normal'
  );
  readonly selectedPokemonType$ = this.selectedPokemonTypeState$
    .asObservable()
    .pipe(shareReplay(1));

  private doubleDamageMultiplier = '(x2)';
  private halfDamageMultiplier = '(x0.5)';
  private noDamageMultiplier = '(x0)';

  constructor() {}

  updateSelectedType(pokemonType: PokemonType): void {
    this.selectedPokemonTypeState$.next(pokemonType);
  }

  fetchPokemonByType(pokemonType: PokemonType): PokemonDetail[] {
    return POKEMON.filter(({ typeOne, typeTwo }) =>
      [typeOne, typeTwo].includes(pokemonType)
    );
  }

  fetchPokemonMovesByType(pokemonType: PokemonType): PokemonMoveDetail[] {
    return POKEMON_MOVES.filter(
      (pokemonMove) => pokemonType === pokemonMove.pokemonType
    );
  }

  computeOffensiveTypeEffects(pokemonType: PokemonType) {
    const { superEffective, notVeryEffective, ineffective } =
      TYPE_DETAILS[pokemonType];
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
          TYPE_DETAILS[type];
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
