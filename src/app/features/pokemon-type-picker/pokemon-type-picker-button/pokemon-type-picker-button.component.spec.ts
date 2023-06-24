import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonTypePickerButtonComponent } from './pokemon-type-picker-button.component';

describe('PokemonTypePickerButtonComponent', () => {
  let component: PokemonTypePickerButtonComponent;
  let fixture: ComponentFixture<PokemonTypePickerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTypePickerButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonTypePickerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
