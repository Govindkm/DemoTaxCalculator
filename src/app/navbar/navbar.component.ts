import { Component } from '@angular/core';
import { IncomeDataService } from '../income-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public dataService: IncomeDataService) { }
}
