import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Andrana } from './andrana';

describe('Andrana', () => {
  let component: Andrana;
  let fixture: ComponentFixture<Andrana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Andrana],
    }).compileComponents();

    fixture = TestBed.createComponent(Andrana);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
