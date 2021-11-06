import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociativeComponent } from './associative.component';

describe('AssociativeComponent', () => {
  let component: AssociativeComponent;
  let fixture: ComponentFixture<AssociativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
