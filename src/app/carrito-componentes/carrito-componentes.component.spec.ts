import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoComponentesComponent } from './carrito-componentes.component';

describe('CarritoComponentesComponent', () => {
  let component: CarritoComponentesComponent;
  let fixture: ComponentFixture<CarritoComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoComponentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
