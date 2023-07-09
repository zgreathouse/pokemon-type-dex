import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { PokemonTypePickerComponent } from '../pokemon-type-picker/pokemon-type-picker.component';
import { PokemonIndexComponent } from '../pokemon-index/pokemon-index.component';
import { PokemonMovesIndexComponent } from '../pokemon-move-index/pokemon-moves-index.component';
import { PokemonTypeEffectIndexComponent } from '../pokemon-type-effect-index/pokemon-type-effect-index.component';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    PokemonIndexComponent,
    PokemonMovesIndexComponent,
    PokemonTypeEffectIndexComponent,
    PokemonTypePickerComponent,
  ],
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})
export class FrameComponent {}
