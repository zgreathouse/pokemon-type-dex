import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonType, PokemonTypeColor } from '@types';
import { MatButtonModule } from '@angular/material/button';
import { PokemonTypePickerService } from '../pokemon-type-picker.service';
import { map, Observable } from 'rxjs';
import { pokemonTypeColors } from 'src/app/ui/pokemon-type-chip/pokemon-type-chip';

@Component({
  selector: 'app-pokemon-type-picker-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './pokemon-type-picker-button.component.html',
  styleUrls: ['./pokemon-type-picker-button.component.scss'],
})
export class PokemonTypePickerButtonComponent implements OnInit {
  @Input() pokemonType!: PokemonType;

  selected$: Observable<boolean> =
    this.pokemonTypePickerService.selectedPokemonType$.pipe(
      map((selectedType) => selectedType === this.pokemonType)
    );

  pokemonTypeColor!: PokemonTypeColor;

  constructor(private pokemonTypePickerService: PokemonTypePickerService) {}

  ngOnInit(): void {
    this.pokemonTypeColor = pokemonTypeColors[this.pokemonType];
  }

  selectType(): void {
    this.pokemonTypePickerService.updateSelectedType(this.pokemonType);
  }
}
