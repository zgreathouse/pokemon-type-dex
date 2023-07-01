import { TestBed } from '@angular/core/testing';
import { PokemonTypeEffectService } from './pokemon-type-effect.service';

describe('PokemonTypeEffectService', () => {
  let service: PokemonTypeEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonTypeEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
