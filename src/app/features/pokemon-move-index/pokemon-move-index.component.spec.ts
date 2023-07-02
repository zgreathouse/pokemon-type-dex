import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMoveIndexComponent } from './pokemon-move-index.component';

describe('PokemonMoveIndexComponent', () => {
  let component: PokemonMoveIndexComponent;
  let fixture: ComponentFixture<PokemonMoveIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PokemonMoveIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonMoveIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
