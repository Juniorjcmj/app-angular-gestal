import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoOperadoraFormComponent } from './cartao-operadora-form.component';

describe('CartaoOperadoraFormComponent', () => {
  let component: CartaoOperadoraFormComponent;
  let fixture: ComponentFixture<CartaoOperadoraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoOperadoraFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoOperadoraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
