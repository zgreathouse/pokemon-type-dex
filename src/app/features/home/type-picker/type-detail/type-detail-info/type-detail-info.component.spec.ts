import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeDetailInfoComponent } from './type-detail-info.component';

describe('TypeDetailInfoComponent', () => {
  let component: TypeDetailInfoComponent;
  let fixture: ComponentFixture<TypeDetailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeDetailInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypeDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
