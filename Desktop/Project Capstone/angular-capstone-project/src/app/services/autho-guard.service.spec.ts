import { TestBed } from '@angular/core/testing';

import { AuthoGuardService } from './autho-guard.service';

describe('AuthoGuardService', () => {
  let service: AuthoGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthoGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
