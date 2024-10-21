import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladosAltaComponent } from './helados-alta.component';

describe('HeladosAltaComponent', () => {
  let component: HeladosAltaComponent;
  let fixture: ComponentFixture<HeladosAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeladosAltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeladosAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
