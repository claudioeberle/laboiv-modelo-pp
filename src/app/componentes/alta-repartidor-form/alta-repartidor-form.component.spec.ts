import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRepartidorFormComponent } from './alta-repartidor-form.component';

describe('AltaRepartidorFormComponent', () => {
  let component: AltaRepartidorFormComponent;
  let fixture: ComponentFixture<AltaRepartidorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaRepartidorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaRepartidorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
