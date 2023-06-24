import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './ui/footer/footer.component';
import { TopNavComponent } from './ui/top-nav/top-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, RouterModule, TopNavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
