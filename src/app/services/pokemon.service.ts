import { Injectable } from '@angular/core';
import { POKEMON } from '@data/pokemon';
import { POKEMON_MOVES } from '@data/pokemon-moves';
import {
  POKEMON_TYPES,
  POKEMON_TYPE_COLORS,
  POKEMON_TYPE_DETAILS,
} from '@data/pokemon-types';
import {
  EffectPerspective,
  PokemonType,
  PokemonTypeColor,
  PokemonTypeEffectDetail,
} from '@types';
import { BehaviorSubject, map, shareReplay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private _selectedPokemonType$ = new BehaviorSubject<PokemonType[]>([
    'Normal',
  ]);
  selectedPokemonType$ = this._selectedPokemonType$
    .asObservable()
    .pipe(shareReplay(1));

  updateSelectedPokemonTypes(pokemonType: PokemonType): void {
    this.selectedPokemonType$
      .pipe(
        take(1),
        tap((selectedPokemonTypes) => {
          const targetIndex = selectedPokemonTypes.indexOf(pokemonType);
          // remove type from selection if already selected for toggle effect
          if (targetIndex !== -1) {
            selectedPokemonTypes.splice(targetIndex, 1);
            this._selectedPokemonType$.next(selectedPokemonTypes);
            return;
          }
          if (selectedPokemonTypes.length > 1) selectedPokemonTypes.shift();
          selectedPokemonTypes.push(pokemonType);
          this._selectedPokemonType$.next(selectedPokemonTypes);
        })
      )
      .subscribe();
  }

  offensiveTypeEffectsOfSelectedType$ = this.selectedPokemonType$.pipe(
    map((selectedPokemonTypes) => {
      if (selectedPokemonTypes.length === 1) {
        return this.computeOffensiveTypeEffects(selectedPokemonTypes[0]);
      } else if (selectedPokemonTypes.length === 2) {
        return [
          ...this.computeOffensiveTypeEffects(selectedPokemonTypes[0]),
          ...this.computeOffensiveTypeEffects(selectedPokemonTypes[1]),
        ];
      } else {
        return this.nullTypeEffects('Offense');
      }
    })
  );

  defensiveTypeEffectsOfSelectedType$ = this.selectedPokemonType$.pipe(
    map((selectedPokemonTypes) =>
      this.computeDefensiveTypeEffects(selectedPokemonTypes)
    )
  );

  pokemonOfSelectedType$ = this.selectedPokemonType$.pipe(
    map((selectedPokemonTypes) =>
      POKEMON.filter(({ typeOne, typeTwo }) =>
        selectedPokemonTypes.every((pokemonType) =>
          [typeOne, typeTwo].includes(pokemonType)
        )
      ).map((pokemon) => {
        pokemon.totalBaseStat =
          pokemon.hp +
          pokemon.attack +
          pokemon.defense +
          pokemon.specialAttack +
          pokemon.specialDefense +
          pokemon.speed;
        return pokemon;
      })
    )
  );

  movesOfSelectedType$ = this.selectedPokemonType$.pipe(
    map((selectedPokemonTypes) =>
      !selectedPokemonTypes.length
        ? POKEMON_MOVES
        : POKEMON_MOVES.filter(({ pokemonType }) =>
            selectedPokemonTypes.includes(pokemonType)
          )
    )
  );

  getPokemonTypeColor(pokemonType: PokemonType): PokemonTypeColor {
    return POKEMON_TYPE_COLORS[pokemonType];
  }

  private nullTypeEffects(
    effectPerspective: EffectPerspective
  ): PokemonTypeEffectDetail[] {
    const isOffensePerspective = effectPerspective === 'Offense';
    const nullTypeEffectsList: PokemonTypeEffectDetail[] = [
      {
        types: [],
        effect: isOffensePerspective ? 'Super effective' : 'Weak',
        damageMultiplier: 'x2',
        pokemonTypes: [],
      },
      {
        types: [],
        effect: isOffensePerspective ? 'Effective' : 'Neutral',
        damageMultiplier: 'x1',
        pokemonTypes: [],
      },
      {
        types: [],
        effect: isOffensePerspective ? 'Not very effective' : 'Resists',
        damageMultiplier: 'x0.5',
        pokemonTypes: [],
      },
      {
        types: [],
        effect: isOffensePerspective ? 'Ineffective' : 'Immune',
        damageMultiplier: 'x0',
        pokemonTypes: [],
      },
    ];
    if (!isOffensePerspective) {
      nullTypeEffectsList.splice(0, 0, {
        types: [],
        effect: '(Double) Weak',
        damageMultiplier: 'x4',
        pokemonTypes: [],
      });
      nullTypeEffectsList.splice(-1, 0, {
        types: [],
        effect: '(Double) Resists',
        damageMultiplier: 'x0.25',
        pokemonTypes: [],
      });
    }
    return nullTypeEffectsList;
  }

  private computeOffensiveTypeEffects(
    pokemonType: PokemonType
  ): PokemonTypeEffectDetail[] {
    return [
      {
        types: [pokemonType],
        effect: 'Super effective',
        damageMultiplier: 'x2',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].superEffective,
      },
      {
        types: [pokemonType],
        effect: 'Effective',
        damageMultiplier: 'x1',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].effective,
      },
      {
        types: [pokemonType],
        effect: 'Not very effective',
        damageMultiplier: 'x0.5',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].notVeryEffective,
      },
      {
        types: [pokemonType],
        effect: 'Ineffective',
        damageMultiplier: 'x0',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].ineffective,
      },
    ];
  }

  private computeDefensiveTypeEffects(
    pokemonTypes: PokemonType[]
  ): PokemonTypeEffectDetail[] {
    if (!pokemonTypes.length) return this.nullTypeEffects('Defense');
    if (pokemonTypes.length === 2) {
      return this.combineDefensiveTypeEffects(pokemonTypes);
    }
    const pokemonType = pokemonTypes[0];
    return [
      {
        types: [pokemonType],
        effect: '(Double) Weak',
        damageMultiplier: 'x4',
        pokemonTypes: [],
      },
      {
        types: [pokemonType],
        effect: 'Weak',
        damageMultiplier: 'x2',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].weak,
      },
      {
        types: [pokemonType],
        effect: 'Neutral',
        damageMultiplier: 'x1',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].neutral,
      },
      {
        types: [pokemonType],
        effect: 'Resists',
        damageMultiplier: 'x0.5',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].resists,
      },
      {
        types: [pokemonType],
        effect: '(Double) Resists',
        damageMultiplier: 'x0.25',
        pokemonTypes: [],
      },
      {
        types: [pokemonType],
        effect: 'Immune',
        damageMultiplier: 'x0',
        pokemonTypes: POKEMON_TYPE_DETAILS[pokemonType].immune,
      },
    ];
  }

  private combineDefensiveTypeEffects(
    selectedPokemonTypes: PokemonType[]
  ): PokemonTypeEffectDetail[] {
    const typeOne = POKEMON_TYPE_DETAILS[selectedPokemonTypes[0]];
    const typeTwo = POKEMON_TYPE_DETAILS[selectedPokemonTypes[1]];
    return [
      {
        types: selectedPokemonTypes,
        effect: '(Double) Weak',
        damageMultiplier: 'x4',
        pokemonTypes: POKEMON_TYPES.filter(
          (pokemonType) =>
            typeOne.weak.includes(pokemonType) &&
            typeTwo.weak.includes(pokemonType)
        ).sort(),
      },
      {
        types: selectedPokemonTypes,
        effect: 'Weak',
        damageMultiplier: 'x2',
        pokemonTypes: POKEMON_TYPES.filter(
          (pokemonType) =>
            (typeOne.weak.includes(pokemonType) &&
              typeTwo.neutral.includes(pokemonType)) ||
            (typeOne.neutral.includes(pokemonType) &&
              typeTwo.weak.includes(pokemonType))
        ).sort(),
      },
      {
        types: selectedPokemonTypes,
        effect: 'Neutral',
        damageMultiplier: 'x1',
        pokemonTypes: POKEMON_TYPES.filter(
          (pokemonType) =>
            typeOne.neutral.includes(pokemonType) &&
            typeTwo.neutral.includes(pokemonType)
        ).sort(),
      },
      {
        types: selectedPokemonTypes,
        effect: 'Resists',
        damageMultiplier: 'x0.5',
        pokemonTypes: POKEMON_TYPES.filter(
          (pokemonType) =>
            (typeOne.neutral.includes(pokemonType) &&
              typeTwo.resists.includes(pokemonType)) ||
            (typeOne.resists.includes(pokemonType) &&
              typeTwo.neutral.includes(pokemonType))
        ).sort(),
      },
      {
        types: selectedPokemonTypes,
        effect: '(Double) Resists',
        damageMultiplier: 'x0.25',
        pokemonTypes: POKEMON_TYPES.filter(
          (pokemonType) =>
            typeOne.resists.includes(pokemonType) &&
            typeTwo.resists.includes(pokemonType)
        ).sort(),
      },
      {
        types: selectedPokemonTypes,
        effect: 'Immune',
        damageMultiplier: 'x0',
        pokemonTypes: POKEMON_TYPES.filter(
          (pokemonType) =>
            typeOne.immune.includes(pokemonType) ||
            typeTwo.immune.includes(pokemonType)
        ).sort(),
      },
    ];
  }
}
