import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { PokemonIndexService } from './pokemon-index.service';
import { map } from 'rxjs';
import { PokemonTypePickerService } from '../pokemon-type-picker/pokemon-type-picker.service';
import { PokemonTypeChipComponent } from 'src/app/ui/pokemon-type-chip/pokemon-type-chip.component';
import { POKEMON } from './pokemon';

@Component({
  selector: 'app-pokemon-index',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    PokemonTypeChipComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.scss'],
})
export class PokemonIndexComponent {
  readonly notApplicable = '—';
  readonly emptyMessage = `None of the first ${POKEMON.length} Pokemon have this typing.`;
  readonly displayedColumns = [
    'Pokèdex #',
    'Sprite',
    'Name',
    'Primary Type',
    'Secondary Type',
    'Total Base Stat',
  ];
  readonly filteredPokemon$ =
    this.pokemonTypePickerService.selectedPokemonType$.pipe(
      map((pokemonType) =>
        this.pokemonIndexService.fetchPokemonByType(pokemonType)
      )
    );
  constructor(
    private pokemonIndexService: PokemonIndexService,
    private pokemonTypePickerService: PokemonTypePickerService
  ) {}
}
