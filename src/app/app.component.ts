import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, RouterModule, TopNavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
