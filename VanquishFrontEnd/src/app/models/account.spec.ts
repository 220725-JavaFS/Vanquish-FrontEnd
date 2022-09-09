import { HttpClientModule } from '@angular/common/http';
import { Account } from './account';

[HttpClientModule]

describe('Account', () => {
  it('should create an instance', () => {
    expect(new Account(1, 'DustinJae', 'password')).toBeTruthy();
  });
});
