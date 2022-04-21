import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoMovimentacaHeaderComponent } from './cartao-movimentaca-header.component';

describe('CartaoMovimentacaHeaderComponent', () => {
  let component: CartaoMovimentacaHeaderComponent;
  let fixture: ComponentFixture<CartaoMovimentacaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoMovimentacaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoMovimentacaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
