import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getTypeResistances, TYPE_DETAILS } from './pokemon-type-detail';
import { PokemonType } from '@types';
import { PokemonTypePickerService } from '../pokemon-type-picker/pokemon-type-picker.service';
import { map } from 'rxjs';
import { PokemonTypeDetailInfoComponent } from './pokemon-type-detail-info/pokemon-type-detail-info.component';

@Component({
  selector: 'app-pokemon-type-detail',
  standalone: true,
  imports: [CommonModule, PokemonTypeDetailInfoComponent],
  templateUrl: './pokemon-type-detail.component.html',
  styleUrls: ['./pokemon-type-detail.component.scss'],
})
export class PokemonTypeDetailComponent {
  selectedType$ = this.pokemonTypePickerService.selectedType$;
  selectedTypeDetail$ = this.selectedType$.pipe(
    map((type) => TYPE_DETAILS[type])
  );

  superEffective$ = this.selectedTypeDetail$.pipe(
    map((typeDetail) => this.format(typeDetail.superEffective))
  );

  notVeryEffective$ = this.selectedTypeDetail$.pipe(
    map((typeDetail) => this.format(typeDetail.notVeryEffective))
  );

  ineffective$ = this.selectedTypeDetail$.pipe(
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
