import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaHomeComponent } from './entrega-home.component';

describe('EntregaHomeComponent', () => {
  let component: EntregaHomeComponent;
  let fixture: ComponentFixture<EntregaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
