import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { PokemonTypeDetailComponent } from '../../features/pokemon-type-detail/pokemon-type-detail.component';
import { PokemonTypePickerComponent } from '../../features/pokemon-type-picker/pokemon-type-picker.component';
import { PokemonIndexComponent } from 'src/app/features/pokemon-index/pokemon-index.component';
import { PokemonTypePickerService } from 'src/app/features/pokemon-type-picker/pokemon-type-picker.service';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    PokemonIndexComponent,
    PokemonTypeDetailComponent,
    PokemonTypePickerComponent,
  ],
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})
export class FrameComponent {
  selectedType$ = this.pokemonTypePickerService.selectedPokemonType$;

  constructor(private pokemonTypePickerService: PokemonTypePickerService) {}
}
