import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonType, PokemonTypeColor } from '@types';
import { PokemonService } from 'src/app/services/pokemon.service';

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

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonTypeColor = this.pokemonService.getPokemonTypeColor(
      this.pokemonType
    );
  }
}
