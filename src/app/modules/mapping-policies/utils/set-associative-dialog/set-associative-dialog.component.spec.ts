import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAssociativeDialogComponent } from './set-associative-dialog.component';

describe('SetAssociativeDialogComponent', () => {
  let component: SetAssociativeDialogComponent;
  let fixture: ComponentFixture<SetAssociativeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetAssociativeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAssociativeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
