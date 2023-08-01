import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentManagerComponent } from './document-manager.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('DocumentManagerComponent', () => {
  let component: DocumentManagerComponent;
  let fixture: ComponentFixture<DocumentManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule, FormsModule],
      providers: [HttpClient],
      declarations: [ DocumentManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
