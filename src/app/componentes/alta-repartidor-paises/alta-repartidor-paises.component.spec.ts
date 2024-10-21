import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRepartidorPaisesComponent } from './alta-repartidor-paises.component';

describe('AltaRepartidorPaisesComponent', () => {
  let component: AltaRepartidorPaisesComponent;
  let fixture: ComponentFixture<AltaRepartidorPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaRepartidorPaisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaRepartidorPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
