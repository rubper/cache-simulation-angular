import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociativeDialogComponent } from './associative-dialog.component';

describe('AssociativeDialogComponent', () => {
  let component: AssociativeDialogComponent;
  let fixture: ComponentFixture<AssociativeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociativeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociativeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
