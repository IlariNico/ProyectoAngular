import { TestBed } from '@angular/core/testing';

import { DatosComponentesService } from './datos-componentes.service';

describe('DatosComponentesService', () => {
  let service: DatosComponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
