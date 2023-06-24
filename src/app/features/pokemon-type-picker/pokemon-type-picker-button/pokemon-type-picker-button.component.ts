import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonType } from '@types';
import { MatButtonModule } from '@angular/material/button';
import { PokemonTypePickerService } from '../pokemon-type-picker.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-type-picker-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './pokemon-type-picker-button.component.html',
  styleUrls: ['./pokemon-type-picker-button.component.scss'],
})
export class PokemonTypePickerButtonComponent {
  @Input() pokemonType!: PokemonType;
  @Output() typeSelectionEvent = new EventEmitter<PokemonType>();

  readonly selected$: Observable<boolean> =
    this.pokemonTypePickerService.selectedType$.pipe(
      map((selectedType) => selectedType === this.pokemonType)
    );

  constructor(private pokemonTypePickerService: PokemonTypePickerService) {}

  selectType(): void {
    this.pokemonTypePickerService.updateSelectedType(this.pokemonType);
  }
}
