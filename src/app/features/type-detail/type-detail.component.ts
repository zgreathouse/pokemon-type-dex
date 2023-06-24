import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getTypeResistances, TYPE_DETAILS } from './type-detail';
import { PokemonType } from '@types';
import { TypePickerService } from '../type-picker/type-picker.service';
import { map } from 'rxjs';
import { TypeDetailInfoComponent } from './type-detail-info/type-detail-info.component';

@Component({
  selector: 'app-type-detail',
  standalone: true,
  imports: [CommonModule, TypeDetailInfoComponent],
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.scss'],
})
export class TypeDetailComponent {
  readonly selectedType$ = this.typePickerService.selectedType$;

  superEffective$ = this.typePickerService.selectedType$.pipe(
    map((type) => this.format(TYPE_DETAILS[type].superEffective))
  );
  notVeryEffective$ = this.typePickerService.selectedType$.pipe(
    map((type) => this.format(TYPE_DETAILS[type].notVeryEffective))
  );
  ineffective$ = this.typePickerService.selectedType$.pipe(
    map((type) => this.format(TYPE_DETAILS[type].ineffective))
  );
  weak$ = this.typePickerService.selectedType$.pipe(
    map((type) => this.format(getTypeResistances(type).weak))
  );
  resists$ = this.typePickerService.selectedType$.pipe(
    map((type) => this.format(getTypeResistances(type).resists))
  );
  immune$ = this.typePickerService.selectedType$.pipe(
    map((type) => this.format(getTypeResistances(type).immune))
  );

  constructor(private typePickerService: TypePickerService) {}

  private format(pokemonTypes: PokemonType[]): string {
    return pokemonTypes.toString().split(',').join(', ') ?? '';
  }
}
