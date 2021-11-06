import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteBackComponent } from './write-back.component';

describe('WriteBackComponent', () => {
  let component: WriteBackComponent;
  let fixture: ComponentFixture<WriteBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
