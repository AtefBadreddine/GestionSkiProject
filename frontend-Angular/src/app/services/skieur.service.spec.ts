import { TestBed } from '@angular/core/testing';

import { SkieurService } from './skieur.service';

describe('SkieurService', () => {
  let service: SkieurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkieurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
