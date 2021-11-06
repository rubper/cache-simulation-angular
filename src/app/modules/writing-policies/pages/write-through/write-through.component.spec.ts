import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteThroughComponent } from './write-through.component';

describe('WriteThroughComponent', () => {
  let component: WriteThroughComponent;
  let fixture: ComponentFixture<WriteThroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteThroughComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteThroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
