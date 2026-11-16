import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammationReactive } from './programmation-reactive';

describe('ProgrammationReactive', () => {
  let component: ProgrammationReactive;
  let fixture: ComponentFixture<ProgrammationReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammationReactive],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgrammationReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
