import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonTypeEffectComponent } from './pokemon-type-effect.component';

describe('PokemonTypeEffectComponent', () => {
  let component: PokemonTypeEffectComponent;
  let fixture: ComponentFixture<PokemonTypeEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTypeEffectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonTypeEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
