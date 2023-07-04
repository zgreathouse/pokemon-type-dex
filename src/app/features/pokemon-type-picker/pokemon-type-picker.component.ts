import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypePickerButtonComponent } from './pokemon-type-picker-button/pokemon-type-picker-button.component';
import { POKEMON_TYPES } from './pokemon-types';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-type-picker',
  standalone: true,
  imports: [CommonModule, PokemonTypePickerButtonComponent],
  templateUrl: './pokemon-type-picker.component.html',
  styleUrls: ['./pokemon-type-picker.component.scss'],
})
export class PokemonTypePickerComponent {
  readonly pokemonTypes = POKEMON_TYPES;
  readonly selectedType$ = this.pokemonService.selectedPokemonType$;

  constructor(private pokemonService: PokemonService) {}
}
