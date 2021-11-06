import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefetchComponent } from './prefetch.component';

describe('PrefetchComponent', () => {
  let component: PrefetchComponent;
  let fixture: ComponentFixture<PrefetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefetchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
