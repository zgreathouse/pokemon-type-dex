import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatTableModule } from '@angular/material/table';
import { PokemonTypeChipComponent } from 'src/app/features/pokemon-type-chip/pokemon-type-chip.component';
import { EffectPerspective, PokemonTypeEffectDetail } from '@types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-type-effect-index',
  standalone: true,
  imports: [CommonModule, MatTableModule, PokemonTypeChipComponent],
  templateUrl: './pokemon-type-effect-index.component.html',
  styleUrls: ['./pokemon-type-effect-index.component.scss'],
})
export class PokemonTypeEffectIndexComponent implements OnInit {
  @Input() effectPerspective!: EffectPerspective;

  readonly displayedColumns = ['types', 'effect', 'damage', 'pokemonTypes'];
  readonly typeColumnHeader = 'Type';
  readonly effectivenessColumnHeader = 'Effectiveness';
  readonly damageColumnHeader = 'Damage';
  readonly effectedTypesColumnHeader = 'Effected Types';

  pokemonTypeEffect$!: Observable<PokemonTypeEffectDetail[]>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonTypeEffect$ =
      this.effectPerspective === 'Offense'
        ? this.pokemonService.offensiveTypeEffectsOfSelectedType$
        : this.pokemonService.defensiveTypeEffectsOfSelectedType$;
  }
}
