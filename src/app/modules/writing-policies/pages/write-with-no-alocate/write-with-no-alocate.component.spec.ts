import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteWithNoAlocateComponent } from './write-with-no-alocate.component';

describe('WriteWithNoAlocateComponent', () => {
  let component: WriteWithNoAlocateComponent;
  let fixture: ComponentFixture<WriteWithNoAlocateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteWithNoAlocateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteWithNoAlocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
