import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { PokemonIndexService } from './pokemon-index.service';
import { map } from 'rxjs';
import { PokemonTypePickerService } from '../pokemon-type-picker/pokemon-type-picker.service';
import { PokemonTypeChipComponent } from 'src/app/ui/pokemon-type-chip/pokemon-type-chip.component';

@Component({
  selector: 'app-pokemon-index',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    PokemonTypeChipComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.scss'],
})
export class PokemonIndexComponent {
  readonly columnNames = [
    'Pokèdex #',
    'Sprite',
    'Name',
    'Primary Type',
    'Secondary Type',
    'Total Base Stat',
  ];
  readonly notApplicable = '—';

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
