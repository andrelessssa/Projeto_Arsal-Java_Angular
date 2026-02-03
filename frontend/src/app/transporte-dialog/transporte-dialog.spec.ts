import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteDialog } from './transporte-dialog';

describe('TransporteDialog', () => {
  let component: TransporteDialog;
  let fixture: ComponentFixture<TransporteDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransporteDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransporteDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
