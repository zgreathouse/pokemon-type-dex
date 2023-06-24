import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypePickerService } from './type-picker.service';
import { TypePickerButtonComponent } from './type-picker-button/type-picker-button.component';
import { POKEMON_TYPES } from './type-picker';

@Component({
  selector: 'app-type-picker',
  standalone: true,
  imports: [CommonModule, TypePickerButtonComponent],
  templateUrl: './type-picker.component.html',
  styleUrls: ['./type-picker.component.scss'],
})
export class TypePickerComponent {
  readonly pokemonTypes = POKEMON_TYPES;
  readonly selectedType$ = this.typePickerService.selectedType$;

  constructor(private typePickerService: TypePickerService) {}
}
