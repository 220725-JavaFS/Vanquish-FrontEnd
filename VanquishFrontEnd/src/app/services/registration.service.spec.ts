import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';

imports: [HttpClientModule]

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: []
    }).compileComponents();
    service = TestBed.inject(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
