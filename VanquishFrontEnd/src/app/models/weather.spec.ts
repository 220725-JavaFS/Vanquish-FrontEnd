import { HttpClientModule } from '@angular/common/http';
import { Weather } from './weather';

imports: [HttpClientModule]

describe('Weather', () => {
  it('should create an instance', () => {
    expect(new Weather('clear', 'sunny', 80)).toBeTruthy();
  });
});
