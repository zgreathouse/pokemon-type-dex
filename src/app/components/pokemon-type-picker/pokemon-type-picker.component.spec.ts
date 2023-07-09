import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonTypePickerComponent } from './pokemon-type-picker.component';

describe('PokemonTypePickerComponent', () => {
  let component: PokemonTypePickerComponent;
  let fixture: ComponentFixture<PokemonTypePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTypePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonTypePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
