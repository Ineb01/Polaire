import { TestBed } from '@angular/core/testing';

import { FileInfoService } from './fileInfo.service';

describe('FileInfoService', () => {
  let service: FileInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});