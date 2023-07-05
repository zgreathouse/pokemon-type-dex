import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { PokemonTypeChipComponent } from 'src/app/ui/pokemon-type-chip/pokemon-type-chip.component';
import { POKEMON } from '@data/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

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
  emptyMessage = `None of the first ${POKEMON.length} Pokemon have this typing.`;
  displayedColumns = [
    'ID',
    'Sprite',
    'Name',
    'Primary Type',
    'Secondary Type',
    'Total Base Stat',
  ];
  filteredPokemon$ = this.pokemonService.pokemonOfSelectedType$;

  constructor(private pokemonService: PokemonService) {}
}
