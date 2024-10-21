import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidoresListadoComponent } from './repartidores-listado.component';

describe('RepartidoresListadoComponent', () => {
  let component: RepartidoresListadoComponent;
  let fixture: ComponentFixture<RepartidoresListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepartidoresListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepartidoresListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
