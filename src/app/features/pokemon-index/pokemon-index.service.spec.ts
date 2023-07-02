import { TestBed } from '@angular/core/testing';
import { PokemonIndexService } from './pokemon-index.service';

describe('PokemonIndexService', () => {
  let service: PokemonIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
