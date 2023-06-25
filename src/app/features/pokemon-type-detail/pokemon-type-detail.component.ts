import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypePickerService } from '../pokemon-type-picker/pokemon-type-picker.service';
import { PokemonTypeEffectComponent } from './pokemon-type-effect/pokemon-type-effect.component';

@Component({
  selector: 'app-pokemon-type-detail',
  standalone: true,
  imports: [CommonModule, PokemonTypeEffectComponent],
  templateUrl: './pokemon-type-detail.component.html',
  styleUrls: ['./pokemon-type-detail.component.scss'],
})
export class PokemonTypeDetailComponent {
  selectedType$ = this.pokemonTypePickerService.selectedPokemonType$;

  constructor(private pokemonTypePickerService: PokemonTypePickerService) {}
}
