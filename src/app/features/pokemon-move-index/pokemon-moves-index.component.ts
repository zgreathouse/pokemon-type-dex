import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { PokemonTypeChipComponent } from 'src/app/ui/pokemon-type-chip/pokemon-type-chip.component';
import { PokemonMovesIndexService } from './pokemon-moves-index.service';
import { PokemonTypePickerService } from '../pokemon-type-picker/pokemon-type-picker.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pokemon-moves-index',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    PokemonTypeChipComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './pokemon-moves-index.component.html',
  styleUrls: ['./pokemon-moves-index.component.scss'],
})
export class PokemonMovesIndexComponent {
  readonly notApplicable = '—';
  readonly displayedColumns = [
    'Name',
    'Type',
    'Category',
    'Power',
    'Accuracy',
    'PP',
    'Effect',
    'Probability',
  ];
  readonly filteredPokemonMoves$ =
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
