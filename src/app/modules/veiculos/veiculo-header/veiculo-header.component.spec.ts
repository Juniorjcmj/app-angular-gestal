import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoHeaderComponent } from './veiculo-header.component';

describe('VeiculoHeaderComponent', () => {
  let component: VeiculoHeaderComponent;
  let fixture: ComponentFixture<VeiculoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
