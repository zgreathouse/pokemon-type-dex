import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TYPE_DETAILS } from './type-detail';
import { PokemonType } from 'src/types';
import { TypePickerService } from '../type-picker.service';
import { map, Subject, takeUntil, tap } from 'rxjs';
import { TypeDetailInfoComponent } from './type-detail-info/type-detail-info.component';

@Component({
  selector: 'app-type-detail',
  standalone: true,
  imports: [CommonModule, TypeDetailInfoComponent],
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.scss'],
})
export class TypeDetailComponent implements OnInit, OnDestroy {
  readonly selectedType$ = this.typePickerService.selectedType$;

  superEffective!: string;
  notVeryEffective!: string;
  ineffective!: string;
  weak!: string;
  resists!: string;
  immune!: string;

  readonly destroy$ = new Subject<boolean>();

  constructor(private typePickerService: TypePickerService) {}

  ngOnInit(): void {
    this.selectedType$
      .pipe(
        map((selectedType) => TYPE_DETAILS[selectedType]),
        tap((typeDetails) => {
          this.superEffective = this.format(typeDetails.superEffective);
          this.notVeryEffective = this.format(typeDetails.notVeryEffective);
          this.ineffective = this.format(typeDetails.ineffective);
          this.weak = this.format(typeDetails.weak);
          this.resists = this.format(typeDetails.resists);
          this.immune = this.format(typeDetails.immune);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private format(pokemonTypes: PokemonType[]): string {
    return pokemonTypes.toString().split(',').join(', ') ?? '';
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
