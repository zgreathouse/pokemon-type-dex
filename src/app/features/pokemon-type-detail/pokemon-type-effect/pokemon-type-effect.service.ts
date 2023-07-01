import { Injectable } from '@angular/core';
import { PokemonType, ResistanceDetail } from '@types';
import {
  POKEMON_TYPES,
  TYPE_DETAILS,
} from '../../pokemon-type-picker/pokemon-types';

@Injectable({ providedIn: 'root' })
export class PokemonTypeEffectService {
  private doubleDamageMultiplier = '(x2)';
  private halfDamageMultiplier = '(x0.5)';
  private noDamageMultiplier = '(x0)';

  computeOffensiveTypeEffects(pokemonType: PokemonType) {
    const { superEffective, notVeryEffective, ineffective } =
      TYPE_DETAILS[pokemonType];
    return [
      {
        pokemonTypeEffect: `Super effective ${this.doubleDamageMultiplier}`,
        pokemonTypes: this.formatPokemonTypes(superEffective),
      },
      {
        pokemonTypeEffect: `Not very effective ${this.halfDamageMultiplier}`,
        pokemonTypes: this.formatPokemonTypes(notVeryEffective),
      },
      {
        pokemonTypeEffect: `Ineffective ${this.noDamageMultiplier}`,
        pokemonTypes: this.formatPokemonTypes(ineffective),
      },
    ];
  }

  computeDefensiveTypeEffects(pokemonType: PokemonType) {
    const { weak, resists, immune } = this.getTypeResistances(pokemonType);
    return [
      {
        pokemonTypeEffect: `Weak ${this.doubleDamageMultiplier}`,
        pokemonTypes: this.formatPokemonTypes(weak),
      },
      {
        pokemonTypeEffect: `Resists ${this.halfDamageMultiplier}`,
        pokemonTypes: this.formatPokemonTypes(resists),
      },
      {
        pokemonTypeEffect: `Immune ${this.noDamageMultiplier}`,
        pokemonTypes: this.formatPokemonTypes(immune),
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

  private formatPokemonTypes(pokemonTypes: PokemonType[]): string {
    return pokemonTypes.toString().split(',').join(', ') ?? '';
  }
}
