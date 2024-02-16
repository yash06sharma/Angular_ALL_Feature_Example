import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFileComponent } from './multiple-file.component';

describe('MultipleFileComponent', () => {
  let component: MultipleFileComponent;
  let fixture: ComponentFixture<MultipleFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
