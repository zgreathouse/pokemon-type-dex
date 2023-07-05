import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POKEMON_TYPES, POKEMON_TYPE_COLORS } from '@data/pokemon-types';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonType } from '@types';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemon-type-picker',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './pokemon-type-picker.component.html',
  styleUrls: ['./pokemon-type-picker.component.scss'],
})
export class PokemonTypePickerComponent {
  pokemonTypes = POKEMON_TYPES;
  pokemonTypeColors = POKEMON_TYPE_COLORS;
  selectedPokemonType$ = this.pokemonService.selectedPokemonType$;

  constructor(private pokemonService: PokemonService) {}

  selectPokemonType(pokemonType: PokemonType): void {
    this.pokemonService.updateSelectedPokemonType(pokemonType);
  }
}
