import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonManagementService } from 'src/app/services/button-management.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})

export class StartPageComponent implements OnInit
{
  constructor(private router: Router, private buttonManagement: ButtonManagementService) { }

  ngOnInit() {
  }

  toShoppingList(): void 
  {
    this.router.navigate(["shoppingList"]);
  }

  
  toNavigation(): void 
  {
    this.router.navigate(["Navigation"]);
  }

}