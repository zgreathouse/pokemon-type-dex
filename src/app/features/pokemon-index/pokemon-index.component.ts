import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
  MatTableModule,
} from '@angular/material/table';
import { Subject, takeUntil, tap } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonTypeChipComponent } from 'src/app/features/pokemon-type-chip/pokemon-type-chip.component';
import { POKEMON } from '@data/pokemon';
import { PokemonDetail } from '@types';

@Component({
  selector: 'app-pokemon-index',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    PokemonTypeChipComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.scss'],
})
export class PokemonIndexComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  readonly displayedColumns = [
    'id',
    'sprite',
    'name',
    'primaryType',
    'secondaryType',
    'hp',
    'attack',
    'defense',
    'specialAttack',
    'specialDefense',
    'speed',
    'totalBaseStat',
  ];
  readonly idColumnHeader = 'ID';
  readonly spriteColumnHeader = 'Sprite';
  readonly nameColumnHeader = 'Name';
  readonly primaryTypeColumnHeader = 'Primary Type';
  readonly secondaryTypeColumnHeader = 'Secondary Type';
  readonly hpColumnHeader = 'HP';
  readonly attackColumnHeader = 'ATK';
  readonly defenseColumnHeader = 'DEF';
  readonly specialAttackColumnHeader = 'Sp. ATK';
  readonly specialDefenseColumnHeader = 'Sp. DEF';
  readonly speedColumnHeader = 'SPD';
  readonly totalBaseStatColumnHeader = 'Total';
  readonly emptyTableMessage = `None of the first ${POKEMON.length} Pokemon have this typing.`;

  dataSource!: MatTableDataSource<PokemonDetail, MatTableDataSourcePaginator>;

  private destroy$ = new Subject<boolean>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.pokemonOfSelectedType$
      .pipe(
        tap((pokemon) => {
          this.dataSource = new MatTableDataSource(pokemon);
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
