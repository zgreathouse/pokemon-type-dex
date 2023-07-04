import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DetailType } from '@types';
import { map } from 'rxjs';
import { PokemonTypeChipComponent } from 'src/app/ui/pokemon-type-chip/pokemon-type-chip.component';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-type-effect',
  standalone: true,
  imports: [CommonModule, PokemonTypeChipComponent],
  templateUrl: './pokemon-type-effect.component.html',
  styleUrls: ['./pokemon-type-effect.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
      transition('active => void', [
        style({ opacity: 1 }),
        animate(100, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class PokemonTypeEffectComponent {
  @Input() detailType!: DetailType;

  readonly notApplicable = '—';

  pokemonTypeEffect$ = this.pokemonService.selectedPokemonType$.pipe(
    map((pokemonType) =>
      this.detailType === 'Offense'
        ? this.pokemonService.computeOffensiveTypeEffects(pokemonType)
        : this.pokemonService.computeDefensiveTypeEffects(pokemonType)
    )
  );

  constructor(private pokemonService: PokemonService) {}
}
