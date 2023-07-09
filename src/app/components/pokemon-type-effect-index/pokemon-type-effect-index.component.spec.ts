import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonTypeEffectIndexComponent } from './pokemon-type-effect-index.component';

describe('PokemonTypeEffectIndexComponent', () => {
  let component: PokemonTypeEffectIndexComponent;
  let fixture: ComponentFixture<PokemonTypeEffectIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTypeEffectIndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonTypeEffectIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
