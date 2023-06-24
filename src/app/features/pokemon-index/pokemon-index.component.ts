import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PokemonService } from './pokemon-index.service';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { PokemonType } from '@types';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    PokemonCardComponent,
    ReactiveFormsModule,
  ],
  providers: [PokemonService],
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.scss'],
})
export class PokemonIndexComponent {
  @Input() pokemonType!: PokemonType;
  myControl = new FormControl('');

  readonly POKEMON_NAMES = this.pokemonService
    .fetchPokemonByType(this.pokemonType)
    .map((pokemon) => pokemon.name.toLocaleLowerCase());

  filteredPokemon$ = this.myControl.valueChanges.pipe(
    startWith(''),
    distinctUntilChanged(),
    debounceTime(300),
    map((value) => this.filterPokemon(value || ''))
  );

  constructor(private pokemonService: PokemonService) {}

  private filterPokemon(value: string): string[] {
    const formattedValue = value.toLowerCase();
    return this.POKEMON_NAMES.filter((pokemonName) =>
      pokemonName.includes(formattedValue)
    );
  }
}