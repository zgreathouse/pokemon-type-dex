import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
  MatTableModule,
} from '@angular/material/table';
import { Subject, takeUntil, tap } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonTypeChipComponent } from 'src/app/features/pokemon-type-chip/pokemon-type-chip.component';
import { PokemonMoveDetail } from '@types';

@Component({
  selector: 'app-pokemon-moves-index',
  standalone: true,
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    PokemonTypeChipComponent,
  ],
  templateUrl: './pokemon-moves-index.component.html',
  styleUrls: ['./pokemon-moves-index.component.scss'],
})
export class PokemonMovesIndexComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  readonly displayedColumns = [
    'pokemonType',
    'name',
    'category',
    'power',
    'accuracy',
    'pp',
    'effect',
    'probability',
  ];
  readonly nameColumnHeader = 'Name';
  readonly typeColumnHeader = 'Type';
  readonly categoryColumnHeader = 'Category';
  readonly powerColumnHeader = 'Power';
  readonly accuracyColumnHeader = 'Accuracy';
  readonly ppColumnHeader = 'PP';
  readonly effectColumnHeader = 'Effect';
  readonly probabilityColumnHeader = '%';

  dataSource!: MatTableDataSource<
    PokemonMoveDetail,
    MatTableDataSourcePaginator
  >;

  private destroy$ = new Subject<boolean>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.movesOfSelectedType$
      .pipe(
        tap((moves) => {
          this.dataSource = new MatTableDataSource(moves);
          if (this.sort) this.dataSource.sort = this.sort;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
