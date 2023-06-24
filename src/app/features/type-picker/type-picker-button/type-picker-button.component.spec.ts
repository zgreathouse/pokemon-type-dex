import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypePickerButtonComponent } from './type-picker-button.component';

describe('TypePickerButtonComponent', () => {
  let component: TypePickerButtonComponent;
  let fixture: ComponentFixture<TypePickerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypePickerButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypePickerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
