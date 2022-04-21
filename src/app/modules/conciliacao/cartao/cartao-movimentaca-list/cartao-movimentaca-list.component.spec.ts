import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoMovimentacaListComponent } from './cartao-movimentaca-list.component';

describe('CartaoMovimentacaListComponent', () => {
  let component: CartaoMovimentacaListComponent;
  let fixture: ComponentFixture<CartaoMovimentacaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoMovimentacaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoMovimentacaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
