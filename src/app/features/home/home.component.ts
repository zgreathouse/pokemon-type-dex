import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypePickerComponent } from './type-picker/type-picker.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TypePickerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
