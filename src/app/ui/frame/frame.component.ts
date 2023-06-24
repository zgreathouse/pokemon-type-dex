import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeDetailComponent } from '../../features/type-detail/type-detail.component';
import { TypePickerComponent } from '../../features/type-picker/type-picker.component';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [CommonModule, TypeDetailComponent, TypePickerComponent],
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})
export class FrameComponent {}
