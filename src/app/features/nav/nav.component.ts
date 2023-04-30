import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() routes!: string[];

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([`/${path.toLowerCase()}`]);
  }
}
