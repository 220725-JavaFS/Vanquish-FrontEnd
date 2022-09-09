import { Playerinfo } from './playerinfo';

describe('Playerinfo', () => {
  it('should create an instance', () => {
    expect(new Playerinfo(1, 'Warrior', 'Houston', 0)).toBeTruthy();
  });
});
