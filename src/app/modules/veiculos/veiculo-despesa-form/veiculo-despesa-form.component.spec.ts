import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoDespesaFormComponent } from './veiculo-despesa-form.component';

describe('VeiculoDespesaFormComponent', () => {
  let component: VeiculoDespesaFormComponent;
  let fixture: ComponentFixture<VeiculoDespesaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoDespesaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoDespesaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
