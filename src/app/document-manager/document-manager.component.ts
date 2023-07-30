import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-document-manager',
  templateUrl: './document-manager.component.html',
  styleUrls: ['./document-manager.component.css']
})
export class DocumentManagerComponent {

  messages: [{content: string, from: string}] = [{content: 'Hi, how can I help you?', from: 'ai'}];
  showChat = false;
  public userMessage = '';
  private apiURL = environment.apiUrl + 'chatbot/';

  constructor(private http: HttpClient) { }

  openChat() {
    this.showChat = this.showChat ? false : true;
  }

  async sendMessage(message: string) {
    this.messages.push({ content: message, from: 'user' });
    this.userMessage = '';
    // Call your API here to get AI response
    const aiResponse = await this.http.post( this.apiURL + 'askquestion', { question: message });
    aiResponse.subscribe((data: any) => {
    this.messages.push({ content: data.text, from: 'ai' });
    });
  }

}
