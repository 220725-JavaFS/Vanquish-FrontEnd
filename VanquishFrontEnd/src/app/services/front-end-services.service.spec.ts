import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FrontEndServicesService } from './front-end-services.service';

imports: [HttpClientModule]

describe('FrontEndServicesService', () => {
  let service: FrontEndServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontEndServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
