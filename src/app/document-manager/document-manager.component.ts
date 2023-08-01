import { Component } from '@angular/core';
import { DocumentManagerService } from './document-manager.service';
@Component({
  selector: 'app-document-manager',
  templateUrl: './document-manager.component.html',
  styleUrls: ['./document-manager.component.css']
})
export class DocumentManagerComponent {

  messages: [{content: string, from: string}] = [{content: 'Hi, how can I help you?', from: 'ai'}];
  showChat = false;
  public userMessage = '';
  public selectedFile = '';

  constructor(private documentService: DocumentManagerService) { }

  async sendMessage(message: string) {
    this.messages.push({ content: message, from: 'user' });
    this.userMessage = '';
    this.documentService.query(message).subscribe((response:any) => {
      this.messages.push({content: response.result, from: 'ai'});
    })
  }

  toggleSubmenu(event: Event) {
    const submenu = (event.currentTarget as HTMLElement).nextElementSibling;
    submenu?.classList.toggle('show');
  }
  
  showFile(filename: string) {
    this.selectedFile = filename;
  }

  getFilePath(filename: string) {
    return `assets/files/${filename}`;
  }
}
