import { TestBed } from '@angular/core/testing';

import { DocumentManagerService } from './document-manager.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';
import { AlertService } from '../services/alert.service';

describe('DocumentManagerService', () => {
  let service: DocumentManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [HttpClient, AlertService],
      declarations: [ DocumentViewerComponent ]
    });
    service = TestBed.inject(DocumentManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
