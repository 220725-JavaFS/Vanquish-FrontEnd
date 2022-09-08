import { TestBed } from '@angular/core/testing';

import { ServicesBattlegroundService } from './services.battleground.service';

describe('ServicesBattlegroundService', () => {
  let service: ServicesBattlegroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesBattlegroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
