import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoDespesaHeaderComponent } from './veiculo-despesa-header.component';

describe('VeiculoDespesaHeaderComponent', () => {
  let component: VeiculoDespesaHeaderComponent;
  let fixture: ComponentFixture<VeiculoDespesaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoDespesaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoDespesaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
