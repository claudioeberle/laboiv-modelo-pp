import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladosModificarComponent } from './helados-modificar.component';

describe('HeladosModificarComponent', () => {
  let component: HeladosModificarComponent;
  let fixture: ComponentFixture<HeladosModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeladosModificarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeladosModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
