import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentManagerService {

  
  private apiURL = environment.documentAPI + 'llm/';

  constructor(private http: HttpClient) { }

  public query(message:string){
    // Call your API here to get AI response
    return this.http.post( this.apiURL + 'query', { question: message }, { withCredentials: true });
  }
}
