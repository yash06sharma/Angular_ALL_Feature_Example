import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipopetiondropdownComponent } from './multipopetiondropdown.component';

describe('MultipopetiondropdownComponent', () => {
  let component: MultipopetiondropdownComponent;
  let fixture: ComponentFixture<MultipopetiondropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipopetiondropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipopetiondropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
