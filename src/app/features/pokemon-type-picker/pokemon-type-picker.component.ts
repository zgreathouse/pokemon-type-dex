import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POKEMON_TYPES } from './pokemon-types';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonType } from '@types';
import { pokemonTypeColors } from 'src/app/ui/pokemon-type-chip/pokemon-type-chip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemon-type-picker',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './pokemon-type-picker.component.html',
  styleUrls: ['./pokemon-type-picker.component.scss'],
})
export class PokemonTypePickerComponent {
  readonly pokemonTypes = POKEMON_TYPES;
  readonly pokemonTypeColors = pokemonTypeColors;

  readonly selectedType$ = this.pokemonService.selectedPokemonType$;

  constructor(private pokemonService: PokemonService) {}

  selectType(pokemonType: PokemonType): void {
    this.pokemonService.updateSelectedType(pokemonType);
  }
}
