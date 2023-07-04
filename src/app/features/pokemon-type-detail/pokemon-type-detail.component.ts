import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypeEffectComponent } from './pokemon-type-effect/pokemon-type-effect.component';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-type-detail',
  standalone: true,
  imports: [CommonModule, PokemonTypeEffectComponent],
  templateUrl: './pokemon-type-detail.component.html',
  styleUrls: ['./pokemon-type-detail.component.scss'],
})
export class PokemonTypeDetailComponent {
  selectedType$ = this.pokemonService.selectedPokemonType$;

  constructor(private pokemonService: PokemonService) {}
}
