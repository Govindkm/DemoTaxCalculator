import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FilesResponse, FilesResult} from './file-responese.interface';

@Injectable({
  providedIn: 'root'
})
export class DocumentManagerService {

  
  private apiURL = environment.documentAPI ;

  constructor(private http: HttpClient) {

   }

  public query(message:string){
    // Call your API here to get AI response
    return this.http.post( this.apiURL + 'llm/query', { question: message }, { withCredentials: true });
  }

  public getAllFilesDetails(): Promise<FilesResult> {
    return  lastValueFrom(this.http.get<FilesResponse>(this.apiURL + 'file/getFilesDetail').pipe(
      map((response: FilesResponse) => {
        return response.result;
      })
    ));
  }

  public downloadFile(filename: string) {
    return this.http.get<Blob>(`${this.apiURL}file/downloadFile/${filename}`, {
      responseType: 'blob' as 'json'
    });
  }
}
