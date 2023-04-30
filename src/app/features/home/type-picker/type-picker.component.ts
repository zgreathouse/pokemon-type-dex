import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypePickerService } from './type-picker.service';
import { TypeButtonComponent } from './type-button/type-button.component';
import { POKEMON_TYPES } from './type-picker';
import { TypeDetailComponent } from './type-detail/type-detail.component';

@Component({
  selector: 'app-type-picker',
  standalone: true,
  imports: [CommonModule, TypeButtonComponent, TypeDetailComponent],
  providers: [TypePickerService],
  templateUrl: './type-picker.component.html',
  styleUrls: ['./type-picker.component.scss'],
})
export class TypePickerComponent {
  readonly pokemonTypes = POKEMON_TYPES;
  readonly selectedType$ = this.typePickerService.selectedType$;

  constructor(private typePickerService: TypePickerService) {}
}
