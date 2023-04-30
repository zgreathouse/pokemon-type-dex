import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeEffect } from 'src/types';

@Component({
  selector: 'app-type-detail-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-detail-info.component.html',
  styleUrls: ['./type-detail-info.component.scss'],
})
export class TypeDetailInfoComponent {
  @Input() typeEffect!: TypeEffect;
  @Input() pokemonTypes!: string;
  readonly notApplicable = '—';
}
