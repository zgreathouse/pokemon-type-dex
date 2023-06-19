import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonName, PokemonType } from '@types';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() name!: PokemonName;
  @Input() typeOne!: PokemonType;
  @Input() typeTwo!: PokemonType | null;
}
