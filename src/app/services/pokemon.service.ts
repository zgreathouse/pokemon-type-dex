import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMON } from '@data/pokemon';
import { POKEMON_MOVES } from '@data/pokemon-moves';
import {
  POKEMON_TYPES,
  POKEMON_TYPE_COLORS,
  POKEMON_TYPE_DETAILS,
} from '@data/pokemon-types';
import {
  EffectPerspective,
  PokemonDetail,
  PokemonType,
  PokemonTypeColor,
  PokemonTypeEffectDetail,
} from '@types';
import { map, Observable, shareReplay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  selectedPokemonType$: Observable<PokemonType[]> =
    this.activatedRoute.queryParamMap.pipe(
      map(
        (queryParams): PokemonType[] =>
          (queryParams.get('selectedTypes')?.split(',') ?? []) as PokemonType[]
      ),
      shareReplay(1)
    );

  offensiveTypeEffectsOfSelectedType$ = this.selectedPokemonType$.pipe(
    map((selectedPokemonTypes) =>
      this.computeOffensiveTypeEffects(selectedPokemonTypes)
    )
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
      ).map((pokemon) => this.addTotalBaseStatProperty(pokemon))
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  updateSelectedPokemonTypes(pokemonType: PokemonType): void {
    this.selectedPokemonType$
      .pipe(
        take(1),
        map((selectedPokemonTypes) => {
          const targetIndex = selectedPokemonTypes.indexOf(pokemonType);
          if (targetIndex !== -1) {
            // remove type from selection if already selected for toggle effect
            selectedPokemonTypes.splice(targetIndex, 1);
          } else {
            // remove a selected type if two types are already selected (first in, first out)
            if (selectedPokemonTypes.length > 1) selectedPokemonTypes.shift();
            selectedPokemonTypes.push(pokemonType);
          }
          return selectedPokemonTypes.join(',') || null;
        }),
        tap((selectedTypes) => {
          this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { selectedTypes },
            queryParamsHandling: 'merge',
          });
        })
      )
      .subscribe();
  }

  getPokemonTypeColor(pokemonType: PokemonType): PokemonTypeColor {
    return POKEMON_TYPE_COLORS[pokemonType];
  }

  private computeOffensiveTypeEffects(
    pokemonTypes: PokemonType[]
  ): PokemonTypeEffectDetail[] {
    if (!pokemonTypes.length) return this.nullTypeEffects('Offense');
    const offensiveTypeEffects: PokemonTypeEffectDetail[] = [];
    pokemonTypes.forEach((pokemonType) => {
      offensiveTypeEffects.push(
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
        }
      );
    });
    return offensiveTypeEffects;
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

  private addTotalBaseStatProperty(pokemon: PokemonDetail): PokemonDetail {
    const totalBaseStat =
      pokemon.hp +
      pokemon.attack +
      pokemon.defense +
      pokemon.specialAttack +
      pokemon.specialDefense +
      pokemon.speed;
    pokemon.totalBaseStat = totalBaseStat;
    return pokemon;
  }
}
