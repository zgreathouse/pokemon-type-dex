import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypeDetailComponent } from '../../features/pokemon-type-detail/pokemon-type-detail.component';
import { PokemonTypePickerComponent } from '../../features/pokemon-type-picker/pokemon-type-picker.component';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [
    CommonModule,
    PokemonTypeDetailComponent,
    PokemonTypePickerComponent,
  ],
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})
export class FrameComponent {}
