import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoOperadoraListComponent } from './cartao-operadora-list.component';

describe('CartaoOperadoraListComponent', () => {
  let component: CartaoOperadoraListComponent;
  let fixture: ComponentFixture<CartaoOperadoraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoOperadoraListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoOperadoraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
