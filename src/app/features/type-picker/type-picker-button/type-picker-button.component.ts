import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonType } from '@types';
import { MatButtonModule } from '@angular/material/button';
import { TypePickerService } from '../type-picker.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-type-picker-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './type-picker-button.component.html',
  styleUrls: ['./type-picker-button.component.scss'],
})
export class TypePickerButtonComponent {
  @Input() pokemonType!: PokemonType;
  @Output() typeSelectionEvent = new EventEmitter<PokemonType>();

  readonly selected$: Observable<boolean> =
    this.typePickerService.selectedType$.pipe(
      map((selectedType) => selectedType === this.pokemonType)
    );

  constructor(private typePickerService: TypePickerService) {}

  selectType(): void {
    this.typePickerService.updateSelectedType(this.pokemonType);
  }
}
