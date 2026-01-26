import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDevedores } from './lista-devedores';

describe('ListaDevedores', () => {
  let component: ListaDevedores;
  let fixture: ComponentFixture<ListaDevedores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDevedores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDevedores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
