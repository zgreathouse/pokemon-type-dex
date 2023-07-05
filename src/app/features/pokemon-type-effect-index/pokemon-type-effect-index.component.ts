import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatTableModule } from '@angular/material/table';
import { PokemonTypeChipComponent } from 'src/app/features/pokemon-type-chip/pokemon-type-chip.component';

@Component({
  selector: 'app-pokemon-type-effect-index',
  standalone: true,
  imports: [CommonModule, MatTableModule, PokemonTypeChipComponent],
  templateUrl: './pokemon-type-effect-index.component.html',
  styleUrls: ['./pokemon-type-effect-index.component.scss'],
})
export class PokemonTypeEffectIndexComponent {
  displayedColumns = ['Effect', 'Damage', 'Pokemon Types'];
  pokemonTypeEffect$ = this.pokemonService.typeEffectsOfSelectedType$;

  constructor(private pokemonService: PokemonService) {}
}
