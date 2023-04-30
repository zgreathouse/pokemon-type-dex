import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeButtonComponent } from './type-button.component';

describe('TypeButtonComponent', () => {
  let component: TypeButtonComponent;
  let fixture: ComponentFixture<TypeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
