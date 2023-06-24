import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonTypeDetailComponent } from './pokemon-type-detail.component';

describe('PokemonTypeDetailComponent', () => {
  let component: PokemonTypeDetailComponent;
  let fixture: ComponentFixture<PokemonTypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTypeDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
