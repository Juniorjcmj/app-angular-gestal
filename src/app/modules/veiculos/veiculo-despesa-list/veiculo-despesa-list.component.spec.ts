import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoDespesaListComponent } from './veiculo-despesa-list.component';

describe('VeiculoDespesaListComponent', () => {
  let component: VeiculoDespesaListComponent;
  let fixture: ComponentFixture<VeiculoDespesaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoDespesaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoDespesaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
