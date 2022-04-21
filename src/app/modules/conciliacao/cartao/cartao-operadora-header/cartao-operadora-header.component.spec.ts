import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoOperadoraHeaderComponent } from './cartao-operadora-header.component';

describe('CartaoOperadoraHeaderComponent', () => {
  let component: CartaoOperadoraHeaderComponent;
  let fixture: ComponentFixture<CartaoOperadoraHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoOperadoraHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoOperadoraHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
