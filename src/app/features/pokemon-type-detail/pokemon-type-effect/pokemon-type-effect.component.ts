import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailType, PokemonType, ResistanceDetail, TypeEffect } from '@types';
import {
  POKEMON_TYPES,
  TYPE_DETAILS,
} from '../../pokemon-type-picker/pokemon-types';
import { PokemonTypePickerService } from '../../pokemon-type-picker/pokemon-type-picker.service';
import { map } from 'rxjs';
import { PokemonTypeEffectService } from './pokemon-type-effect.service';

@Component({
  selector: 'app-pokemon-type-effect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-type-effect.component.html',
  styleUrls: ['./pokemon-type-effect.component.scss'],
})
export class PokemonTypeEffectComponent {
  @Input() detailType!: DetailType;

  readonly notApplicable = '—';

  pokemonTypeEffect$ = this.pokemonTypePickerService.selectedPokemonType$.pipe(
    map((pokemonType) =>
      this.detailType === 'Offense'
        ? this.pokemonTypeEffectService.computeOffensiveTypeEffects(pokemonType)
        : this.pokemonTypeEffectService.computeDefensiveTypeEffects(pokemonType)
    )
  );

  constructor(
    private pokemonTypeEffectService: PokemonTypeEffectService,
    private pokemonTypePickerService: PokemonTypePickerService
  ) {}
}
