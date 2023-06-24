import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypePickerService } from './pokemon-type-picker.service';
import { PokemonTypePickerButtonComponent } from './pokemon-type-picker-button/pokemon-type-picker-button.component';
import { POKEMON_TYPES } from './pokemon-types';

@Component({
  selector: 'app-pokemon-type-picker',
  standalone: true,
  imports: [CommonModule, PokemonTypePickerButtonComponent],
  templateUrl: './pokemon-type-picker.component.html',
  styleUrls: ['./pokemon-type-picker.component.scss'],
})
export class PokemonTypePickerComponent {
  readonly pokemonTypes = POKEMON_TYPES;
  readonly selectedType$ = this.pokemonTypePickerService.selectedType$;

  constructor(private pokemonTypePickerService: PokemonTypePickerService) {}
}
