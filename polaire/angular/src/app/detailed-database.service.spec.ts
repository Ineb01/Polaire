import { TestBed } from '@angular/core/testing';

import { DetailedDatabaseService } from './detailed-database.service';

describe('DetailedDatabaseService', () => {
  let service: DetailedDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailedDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
