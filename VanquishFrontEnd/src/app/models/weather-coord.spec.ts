import { HttpClientModule } from '@angular/common/http';
import { WeatherCoord } from './weather-coord';

imports: [HttpClientModule]

describe('WeatherCoord', () => {
  it('should create an instance', () => {
    expect(new WeatherCoord('dallas', 120, 120, 'us', 'tx')).toBeTruthy();
  });
});
