import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { map } from 'rxjs';
import { PokemonTypeChipComponent } from 'src/app/ui/pokemon-type-chip/pokemon-type-chip.component';
import { PokemonMovesIndexService } from './pokemon-moves-index.service';
import { PokemonTypePickerService } from '../pokemon-type-picker/pokemon-type-picker.service';

@Component({
  selector: 'app-pokemon-moves-index',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    PokemonTypeChipComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './pokemon-moves-index.component.html',
  styleUrls: ['./pokemon-moves-index.component.scss'],
})
export class PokemonMovesIndexComponent {
  readonly columnNames = [
    { name: 'Name', colspan: 1, className: 'grid-tile-text' },
    { name: 'Pokèmon Type', colspan: 1, className: null },
    { name: 'Category', colspan: 1, className: null },
    { name: 'Effect', colspan: 3, className: null },
    { name: 'Power', colspan: 1, className: null },
    { name: 'Accuracy', colspan: 1, className: null },
    { name: 'PP', colspan: 1, className: null },
  ];

  filteredPokemonMoves$ =
    this.pokemonTypePickerService.selectedPokemonType$.pipe(
      map((pokemonType) =>
        this.pokemonMoveIndexService.fetchPokemonMovesByType(pokemonType)
      )
    );

  constructor(
    private pokemonMoveIndexService: PokemonMovesIndexService,
    private pokemonTypePickerService: PokemonTypePickerService
  ) {}
}
