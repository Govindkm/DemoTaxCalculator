import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DocumentManagerService } from '../document-manager.service';
import { AlertService } from 'src/app/services/alert.service';
import { File } from '../file-responese.interface'
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';

declare const WebViewer: any;

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.css']
})
export class DocumentViewerComponent implements OnInit, AfterViewInit {
  public files: File[] = [];
  public selectedFile?: File;
  public safeFileURL?: SafeResourceUrl;
  public isViewer: boolean = false;
  public fileBlob?: Object;
  wvInstance: any;
  @ViewChild('viewer', {static: true}) viewer?: ElementRef;

  constructor(private documentService: DocumentManagerService, private alertService: AlertService, public sanitizer: DomSanitizer){
  }
  ngOnInit(): void {
    this.documentService.getAllFilesDetails().then(res => {
      this.files = res.files;
      this.selectedFile = this.files[0];
    }, rej => {
        console.error(rej);
        this.alertService.error('Error fetching files details: ' + JSON.stringify(rej.error.formErrors) || 'An error has occurred');
    })

    this.wvDocumentLoadedHandler = this.wvDocumentLoadedHandler.bind(this);
  }

  ngAfterViewInit(): void {
    // The following code initiates a new instance of WebViewer.

    WebViewer({
      path: '../../../wv-resources/lib',
      licenseKey: 'demo:1691345185680:7c5cb29c030000000010e4aa0d8f48f2ce8410e1cafa96962f34d479f7', // sign up to get a key at https://dev.apryse.com
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'
    }, this.viewer?.nativeElement).then((instance:any) => {
      this.wvInstance = instance;

      // now you can access APIs through this.webviewer.getInstance()
      instance.UI.openElement('notesPanel');
      // see https://docs.apryse.com/documentation/web/guides/ui/apis
      // for the full list of APIs

      // or listen to events from the viewer element
      this.viewer?.nativeElement.addEventListener('pageChanged', (e:any) => {
        const [ pageNumber ] = e.detail;
        console.log(`Current page is ${pageNumber}`);
      });

      // or from the docViewer instance
      instance.Core.documentViewer.addEventListener('annotationsLoaded', () => {
        console.log('annotations loaded');
      });

      instance.Core.documentViewer.addEventListener('documentLoaded', this.wvDocumentLoadedHandler)
    })
  }

  wvDocumentLoadedHandler(): void {
    // you can access docViewer object for low-level APIs
    const { documentViewer, annotationManager, Annotations } = this.wvInstance.Core;
    // and access classes defined in the WebViewer iframe
    const rectangle = new Annotations.RectangleAnnotation();
    rectangle.PageNumber = 1;
    rectangle.X = 100;
    rectangle.Y = 100;
    rectangle.Width = 250;
    rectangle.Height = 250;
    rectangle.StrokeThickness = 5;
    rectangle.Author = annotationManager.getCurrentUser();
    annotationManager.addAnnotation(rectangle);
    annotationManager.drawAnnotations(rectangle.PageNumber);
    // see https://www.pdftron.com/api/web/WebViewerInstance.html for the full list of low-level APIs
  }

  onFileSelect(file: File){
    this.selectedFile = file;
    this.safeFileURL = this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:5000/api/v1/file/downloadFile/${this.selectedFile.name}`);
    var fileview = this.safeFileURL.toString();
    this.isViewer = false;
  }

  onViewFile(filename: string){
    this.documentService.downloadFile(filename).subscribe(rawfile => {
      this.isViewer = true;
      this.fileBlob = rawfile;
    })
  }
}
