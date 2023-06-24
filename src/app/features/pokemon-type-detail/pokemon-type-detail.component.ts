import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getTypeResistances, TYPE_DETAILS } from './pokemon-type-detail';
import { PokemonType } from '@types';
import { PokemonTypePickerService } from '../pokemon-type-picker/pokemon-type-picker.service';
import { map } from 'rxjs';
import { PokemonTypeEffectComponent } from './pokemon-type-effect/pokemon-type-effect.component';

@Component({
  selector: 'app-pokemon-type-detail',
  standalone: true,
  imports: [CommonModule, PokemonTypeEffectComponent],
  templateUrl: './pokemon-type-detail.component.html',
  styleUrls: ['./pokemon-type-detail.component.scss'],
})
export class PokemonTypeDetailComponent {
  selectedType$ = this.pokemonTypePickerService.selectedPokemonType$;
  selectedTypeEffectDetail$ =
    this.pokemonTypePickerService.selectedPokemonType$.pipe(
      map((type) => TYPE_DETAILS[type])
    );

  superEffective$ = this.selectedTypeEffectDetail$.pipe(
    map((typeDetail) => this.format(typeDetail.superEffective))
  );

  notVeryEffective$ = this.selectedTypeEffectDetail$.pipe(
    map((typeDetail) => this.format(typeDetail.notVeryEffective))
  );

  ineffective$ = this.selectedTypeEffectDetail$.pipe(
    map((typeDetail) => this.format(typeDetail.ineffective))
  );

  weak$ = this.selectedType$.pipe(
    map((type) => this.format(getTypeResistances(type).weak))
  );

  resists$ = this.selectedType$.pipe(
    map((type) => this.format(getTypeResistances(type).resists))
  );

  immune$ = this.selectedType$.pipe(
    map((type) => this.format(getTypeResistances(type).immune))
  );

  constructor(private pokemonTypePickerService: PokemonTypePickerService) {}

  private format(pokemonTypes: PokemonType[]): string {
    return pokemonTypes.toString().split(',').join(', ') ?? '';
  }
}
