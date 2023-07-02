import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonMovesIndexComponent } from './pokemon-moves-index.component';

describe('PokemonMovesIndexComponent', () => {
  let component: PokemonMovesIndexComponent;
  let fixture: ComponentFixture<PokemonMovesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonMovesIndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonMovesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
