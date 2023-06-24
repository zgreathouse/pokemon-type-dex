import { TestBed } from '@angular/core/testing';
import { PokemonTypePickerService } from './pokemon-type-picker.service';

describe('PokemonTypePickerService', () => {
  let service: PokemonTypePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonTypePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
