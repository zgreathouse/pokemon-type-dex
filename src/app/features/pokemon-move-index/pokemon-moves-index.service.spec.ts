import { TestBed } from '@angular/core/testing';
import { PokemonMovesIndexService } from './pokemon-moves-index.service';

describe('PokemonMovesIndexService', () => {
  let service: PokemonMovesIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonMovesIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
