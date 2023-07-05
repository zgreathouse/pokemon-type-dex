import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonTypeChipComponent } from 'src/app/ui/pokemon-type-chip/pokemon-type-chip.component';
import { MatTableModule } from '@angular/material/table';
import { PokemonService } from 'src/app/services/pokemon.service';

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
  displayedColumns = [
    'Name',
    'Type',
    'Category',
    'Power',
    'Accuracy',
    'PP',
    'Effect',
    '%',
  ];
  filteredPokemonMoves$ = this.pokemonService.movesOfSelectedType$;

  constructor(private pokemonService: PokemonService) {}
}
