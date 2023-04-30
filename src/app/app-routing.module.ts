import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'pokémon',
    loadComponent: () =>
      import('./features/pokemon/pokemon.component').then(
        (m) => m.PokemonComponent
      ),
  },
  {
    path: 'moves',
    loadComponent: () =>
      import('./features/moves/moves.component').then((m) => m.MovesComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
