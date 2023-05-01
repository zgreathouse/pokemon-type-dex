import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DamageMultiplier, TypeEffect } from '@types';

@Component({
  selector: 'app-type-detail-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-detail-info.component.html',
  styleUrls: ['./type-detail-info.component.scss'],
})
export class TypeDetailInfoComponent implements OnInit {
  @Input() typeEffect!: TypeEffect;
  @Input() pokemonTypes!: string;

  readonly notApplicable = '—';

  damageMultiplier!: DamageMultiplier;

  ngOnInit(): void {
    this.damageMultiplier = this.getDamageModifier(this.typeEffect);
  }

  getDamageModifier(typeEffect: TypeEffect): DamageMultiplier {
    switch (true) {
      case typeEffect === 'Super effective' || typeEffect === 'Weak':
        return '(x2)';

      case typeEffect === 'Not very effective' || typeEffect === 'Resists':
        return '(x0.5)';

      default:
        return '(x0)';
    }
  }
}
