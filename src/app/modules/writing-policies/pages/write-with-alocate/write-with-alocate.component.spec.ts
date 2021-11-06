import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteWithAlocateComponent } from './write-with-alocate.component';

describe('WriteWithAlocateComponent', () => {
  let component: WriteWithAlocateComponent;
  let fixture: ComponentFixture<WriteWithAlocateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteWithAlocateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteWithAlocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
