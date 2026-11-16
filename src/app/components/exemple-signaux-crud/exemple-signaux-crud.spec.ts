import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleSignauxCrud } from './exemple-signaux-crud';

describe('ExempleSignauxCrud', () => {
  let component: ExempleSignauxCrud;
  let fixture: ComponentFixture<ExempleSignauxCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExempleSignauxCrud],
    }).compileComponents();

    fixture = TestBed.createComponent(ExempleSignauxCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
