import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumFilterComponent } from './custum-filter.component';

describe('CustumFilterComponent', () => {
  let component: CustumFilterComponent;
  let fixture: ComponentFixture<CustumFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustumFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
