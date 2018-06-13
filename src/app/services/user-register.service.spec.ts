import { TestBed, inject } from '@angular/core/testing';

import { UserRegisterService } from '../services/user-register.service';

describe('UserRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRegisterService]
    });
  });

  it('should be created', inject([UserRegisterService], (service: UserRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
