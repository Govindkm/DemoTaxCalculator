import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotComponent } from './chatbot.component';

describe('ChatbotComponent', () => {
  let component: ChatbotComponent;
  let fixture: ComponentFixture<ChatbotComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatbotComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle showChat when openChat is called', () => {
    // initial value of showChat should be false
    expect(component.showChat).toBeFalse();

    // call openChat and check that showChat is now true
    component.openChat();
    expect(component.showChat).toBeTrue();

    // call openChat again and check that showChat is now false
    component.openChat();
    expect(component.showChat).toBeFalse();
  });

  it('should send message and receive AI response', async () => {
    const mockMessage = 'Hello, chatbot!';
    const apiURL = Reflect.get(component, 'apiURL');
    // Call sendMessage with the mock message
    await component.sendMessage(mockMessage);

    // Expect the user message to be added to the messages array
    expect(component.messages).toContain({
      content: mockMessage,
      from: 'user',
    });

    // Expect the user message to be cleared
    expect(component.userMessage).toBe('');

    // Expect the API call to have been made with the correct URL and payload
    const req = httpMock.expectOne(apiURL + 'askquestion');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ question: mockMessage });

    // Provide a mock response from the API
    const mockAIResponse = { text: 'AI response' };
    req.flush(mockAIResponse);

    // Expect the AI response to be added to the messages array
    expect(component.messages).toContain({
      content: mockAIResponse.text,
      from: 'ai',
    });
  });
});
