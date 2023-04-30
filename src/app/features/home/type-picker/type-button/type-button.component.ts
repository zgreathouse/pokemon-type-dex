import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonType } from 'src/types';
import { TypePickerService } from '../type-picker.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-type-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-button.component.html',
  styleUrls: ['./type-button.component.scss'],
})
export class TypeButtonComponent {
  @Input() pokemonType!: PokemonType;
  @Output() typeSelectionEvent = new EventEmitter<PokemonType>();

  readonly selected$: Observable<boolean> =
    this.typePickerService.selectedType$.pipe(
      map((selectedType) => selectedType === this.pokemonType)
    );

  constructor(private typePickerService: TypePickerService) {}

  handleTypeSelection(): void {
    this.typePickerService.updateSelectedType(this.pokemonType);
  }
}
