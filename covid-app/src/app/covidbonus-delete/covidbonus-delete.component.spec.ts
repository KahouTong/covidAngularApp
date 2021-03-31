import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidbonusDeleteComponent } from './covidbonus-delete.component';

describe('CovidbonusDeleteComponent', () => {
  let component: CovidbonusDeleteComponent;
  let fixture: ComponentFixture<CovidbonusDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidbonusDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidbonusDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
