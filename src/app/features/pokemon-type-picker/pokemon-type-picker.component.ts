import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PokemonService } from 'src/app/services/pokemon.service';
import { POKEMON_TYPES, POKEMON_TYPE_COLORS } from '@data/pokemon-types';
import { PokemonType } from '@types';

@Component({
  selector: 'app-pokemon-type-picker',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSidenavModule],
  templateUrl: './pokemon-type-picker.component.html',
  styleUrls: ['./pokemon-type-picker.component.scss'],
})
export class PokemonTypePickerComponent {
  pokemonTypes = POKEMON_TYPES;
  pokemonTypeColors = POKEMON_TYPE_COLORS;
  selectedPokemonTypes$ = this.pokemonService.selectedPokemonType$;

  constructor(private pokemonService: PokemonService) {}

  selectPokemonType(pokemonType: PokemonType): void {
    this.pokemonService.updateSelectedPokemonTypes(pokemonType);
  }
}
