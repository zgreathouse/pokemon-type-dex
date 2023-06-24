import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonTypeDetailInfoComponent } from './pokemon-type-detail-info.component';

describe('PokemonTypeDetailInfoComponent', () => {
  let component: PokemonTypeDetailInfoComponent;
  let fixture: ComponentFixture<PokemonTypeDetailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTypeDetailInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonTypeDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
