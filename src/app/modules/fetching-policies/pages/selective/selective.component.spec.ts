import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectiveComponent } from './selective.component';

describe('SelectiveComponent', () => {
  let component: SelectiveComponent;
  let fixture: ComponentFixture<SelectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
