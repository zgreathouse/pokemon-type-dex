import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import { DetailType } from '@types';
import { PokemonTypePickerService } from '../../pokemon-type-picker/pokemon-type-picker.service';
import { map } from 'rxjs';
import { PokemonTypeEffectService } from './pokemon-type-effect.service';

@Component({
  selector: 'app-pokemon-type-effect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-type-effect.component.html',
  styleUrls: ['./pokemon-type-effect.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class PokemonTypeEffectComponent {
  @Input() detailType!: DetailType;

  readonly notApplicable = '—';

  pokemonTypeEffect$ = this.pokemonTypePickerService.selectedPokemonType$.pipe(
    map((pokemonType) =>
      this.detailType === 'Offense'
        ? this.pokemonTypeEffectService.computeOffensiveTypeEffects(pokemonType)
        : this.pokemonTypeEffectService.computeDefensiveTypeEffects(pokemonType)
    )
  );

  constructor(
    private pokemonTypeEffectService: PokemonTypeEffectService,
    private pokemonTypePickerService: PokemonTypePickerService
  ) {}
}
