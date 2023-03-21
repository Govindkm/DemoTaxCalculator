import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ToastrModule.forRoot(), HttpClientModule],
      declarations: [AppComponent, NavbarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Test Case 1: should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Test Case 2: should have a title', () => {
    expect(component.title).toBeDefined();
    expect(component.title).not.toBeNull();
    expect(component.title).toEqual('CalculateYourTax');
  });
});
