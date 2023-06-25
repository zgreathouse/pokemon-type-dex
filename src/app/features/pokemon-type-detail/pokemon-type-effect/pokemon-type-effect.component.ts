import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailType, PokemonType, ResistanceDetail, TypeEffect } from '@types';
import {
  POKEMON_TYPES,
  TYPE_DETAILS,
} from '../../pokemon-type-picker/pokemon-types';
import { PokemonTypePickerService } from '../../pokemon-type-picker/pokemon-type-picker.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokemon-type-effect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-type-effect.component.html',
  styleUrls: ['./pokemon-type-effect.component.scss'],
})
export class PokemonTypeEffectComponent {
  @Input() detailType!: DetailType;

  readonly doubleDamageMultiplier = '(x2)';
  readonly halfDamageMultiplier = '(x0.5)';
  readonly noDamageMultiplier = '(x0)';
  readonly notApplicable = '—';

  pokemonTypeEffect$ = this.pokemonTypePickerService.selectedPokemonType$.pipe(
    map((pokemonType) => {
      const pokemonTypeEffectDetail = TYPE_DETAILS[pokemonType];

      const doubleDamageEffect: TypeEffect =
        this.detailType === 'Offense' ? 'Super effective' : 'Weak';
      const halfDamageEffect: TypeEffect =
        this.detailType === 'Offense' ? 'Not very effective' : 'Resists';
      const noDamageEffect: TypeEffect =
        this.detailType === 'Offense' ? 'Ineffective' : 'Immune';

      const doubleDamagePokemonTypes: PokemonType[] =
        this.detailType === 'Offense'
          ? pokemonTypeEffectDetail.superEffective
          : this.getTypeResistances(pokemonType).weak;

      const halfDamagePokemonTypes: PokemonType[] =
        this.detailType === 'Offense'
          ? pokemonTypeEffectDetail.notVeryEffective
          : this.getTypeResistances(pokemonType).resists;

      const noDamagePokemonTypes: PokemonType[] =
        this.detailType === 'Offense'
          ? pokemonTypeEffectDetail.ineffective
          : this.getTypeResistances(pokemonType).immune;

      return [
        {
          pokemonTypeEffect: `${doubleDamageEffect} ${this.doubleDamageMultiplier}`,
          pokemonTypes: this.formatPokemonTypes(doubleDamagePokemonTypes),
        },
        {
          pokemonTypeEffect: `${halfDamageEffect} ${this.halfDamageMultiplier}`,
          pokemonTypes: this.formatPokemonTypes(halfDamagePokemonTypes),
        },
        {
          pokemonTypeEffect: `${noDamageEffect} ${this.noDamageMultiplier}`,
          pokemonTypes: this.formatPokemonTypes(noDamagePokemonTypes),
        },
      ];
    })
  );

  constructor(private pokemonTypePickerService: PokemonTypePickerService) {}

  private formatPokemonTypes(pokemonTypes: PokemonType[]): string {
    return pokemonTypes.toString().split(',').join(', ') ?? '';
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
