import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladosBajaComponent } from './helados-baja.component';

describe('HeladosBajaComponent', () => {
  let component: HeladosBajaComponent;
  let fixture: ComponentFixture<HeladosBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeladosBajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeladosBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
