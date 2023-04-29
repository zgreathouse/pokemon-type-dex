import { Component } from '@angular/core';
import { ROUTES } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routes: string[] = ROUTES.filter(({ path }) => path && path !== '/').map(
    ({ path }) => `${path?.charAt(0).toUpperCase()}${path?.slice(1)}` ?? ''
  );
}
