export interface File {
    date_modified: string;
    readonly name: string;
    size: number;
    type: string;
  }
  
  export interface FilesResult {
    files: File[];
  }
  
  export interface FilesResponse {
    result: FilesResult;
  }
  