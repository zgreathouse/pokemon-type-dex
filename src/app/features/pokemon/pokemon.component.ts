import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  providers: [PokemonService],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  pokemon$ = this.pokemonService.filteredPokemon$.pipe();

  constructor(private pokemonService: PokemonService) {}
}
