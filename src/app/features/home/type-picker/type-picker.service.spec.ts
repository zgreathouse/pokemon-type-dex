import { TestBed } from '@angular/core/testing';
import { TypePickerService } from './type-picker.service';

describe('TypePickerService', () => {
  let service: TypePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
