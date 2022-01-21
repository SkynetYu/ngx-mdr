import { TestBed } from '@angular/core/testing';

import { NgxMdrService } from './ngx-mdr.service';

describe('NgxMdrService', () => {
  let service: NgxMdrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMdrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
