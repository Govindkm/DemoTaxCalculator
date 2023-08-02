import { Component, OnInit } from '@angular/core';
import { DocumentManagerService } from '../document-manager.service';
import { AlertService } from 'src/app/services/alert.service';
import { File } from '../file-responese.interface'

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.css']
})
export class DocumentViewerComponent implements OnInit {
  public files: File[] = [];
  public selectedFile?: File;
  public isViewer: boolean = false;
  public fileBlob?: Object;
  constructor(private documentService: DocumentManagerService, private alertService: AlertService){}
  ngOnInit(): void {
    this.documentService.getAllFilesDetails().then(res => {
      this.files = res.files;
      this.selectedFile = this.files[0];
    }, rej => {
        console.error(rej);
        this.alertService.error('Error fetching files details: ' + JSON.stringify(rej.error.formErrors) || 'An error has occurred');
    })
  }

  onFileSelect(file: File){
    this.selectedFile = file;
    this.isViewer = false;
  }

  onViewFile(filename: string){
    this.documentService.downloadFile(filename).subscribe(rawfile => {
      this.isViewer = true;
      this.fileBlob = rawfile;
    })
  }
}
