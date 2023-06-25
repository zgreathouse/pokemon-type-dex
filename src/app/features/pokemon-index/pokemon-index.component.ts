import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { PokemonIndexService } from './pokemon-index.service';
import { map } from 'rxjs';
import { PokemonTypePickerService } from '../pokemon-type-picker/pokemon-type-picker.service';

@Component({
  selector: 'app-pokemon-index',
  standalone: true,
  imports: [CommonModule, MatGridListModule, ReactiveFormsModule],
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.scss'],
})
export class PokemonIndexComponent {
  filteredPokemon$ = this.pokemonTypePickerService.selectedPokemonType$.pipe(
    map((pokemonType) =>
      this.pokemonIndexService.fetchPokemonByType(pokemonType)
    )
  );

  constructor(
    private pokemonIndexService: PokemonIndexService,
    private pokemonTypePickerService: PokemonTypePickerService
  ) {}
}
