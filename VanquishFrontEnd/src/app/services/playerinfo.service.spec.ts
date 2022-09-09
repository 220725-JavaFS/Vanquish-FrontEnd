import { TestBed } from '@angular/core/testing';

import { PlayerinfoService } from './playerinfo.service';

describe('PlayerinfoService', () => {
  let service: PlayerinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
