import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladosListadosComponent } from './helados-listados.component';

describe('HeladosListadosComponent', () => {
  let component: HeladosListadosComponent;
  let fixture: ComponentFixture<HeladosListadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeladosListadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeladosListadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
