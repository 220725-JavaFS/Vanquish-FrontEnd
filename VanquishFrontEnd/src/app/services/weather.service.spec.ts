import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

imports: [HttpClientModule]

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: []
    }).compileComponents();
    service = TestBed.inject(WeatherService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
