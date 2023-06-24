import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  links = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zach-greathouse/',
    },
    {
      label: 'Github',
      href: 'https://github.com/zgreathouse/pokemon-type-dex',
    },
  ];
}
