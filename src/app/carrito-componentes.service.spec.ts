import { TestBed } from '@angular/core/testing';

import { CarritoComponentesService } from './carrito-componentes.service';

describe('CarritoComponentesService', () => {
  let service: CarritoComponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
