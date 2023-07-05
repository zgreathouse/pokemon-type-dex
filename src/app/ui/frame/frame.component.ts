import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { PokemonTypePickerComponent } from '../../features/pokemon-type-picker/pokemon-type-picker.component';
import { PokemonIndexComponent } from 'src/app/features/pokemon-index/pokemon-index.component';
import { PokemonTypeChipComponent } from '../pokemon-type-chip/pokemon-type-chip.component';
import { PokemonMovesIndexComponent } from 'src/app/features/pokemon-move-index/pokemon-moves-index.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonTypeEffectIndexComponent } from 'src/app/features/pokemon-type-effect-index/pokemon-type-effect-index.component';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    PokemonIndexComponent,
    PokemonMovesIndexComponent,
    PokemonTypeChipComponent,
    PokemonTypeEffectIndexComponent,
    PokemonTypePickerComponent,
  ],
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})
export class FrameComponent {
  selectedType$ = this.pokemonService.selectedPokemonType$;

  constructor(private pokemonService: PokemonService) {}
}
