import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoMovimentacaFormComponent } from './cartao-movimentaca-form.component';

describe('CartaoMovimentacaFormComponent', () => {
  let component: CartaoMovimentacaFormComponent;
  let fixture: ComponentFixture<CartaoMovimentacaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoMovimentacaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoMovimentacaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
