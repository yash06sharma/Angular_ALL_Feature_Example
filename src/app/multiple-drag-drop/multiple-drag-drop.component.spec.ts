import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleDragDropComponent } from './multiple-drag-drop.component';

describe('MultipleDragDropComponent', () => {
  let component: MultipleDragDropComponent;
  let fixture: ComponentFixture<MultipleDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleDragDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
