import { TestBed } from '@angular/core/testing';

import { DocumentManagerService } from './document-manager.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DocumentManagerService', () => {
  let service: DocumentManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(DocumentManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
