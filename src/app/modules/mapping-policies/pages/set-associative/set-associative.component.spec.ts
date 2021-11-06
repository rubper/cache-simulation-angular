import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAssociativeComponent } from './set-associative.component';

describe('SetAssociativeComponent', () => {
  let component: SetAssociativeComponent;
  let fixture: ComponentFixture<SetAssociativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetAssociativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAssociativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
