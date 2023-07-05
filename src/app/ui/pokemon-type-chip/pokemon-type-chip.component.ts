import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonType, PokemonTypeColor } from '@types';
import { POKEMON_TYPE_COLORS } from '@data/pokemon-types';

@Component({
  selector: 'app-pokemon-type-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-type-chip.component.html',
  styleUrls: ['./pokemon-type-chip.component.scss'],
})
export class PokemonTypeChipComponent implements OnInit {
  @Input() pokemonType!: PokemonType;

  pokemonTypeColor!: PokemonTypeColor;

  ngOnInit(): void {
    this.pokemonTypeColor = POKEMON_TYPE_COLORS[this.pokemonType];
  }
}
