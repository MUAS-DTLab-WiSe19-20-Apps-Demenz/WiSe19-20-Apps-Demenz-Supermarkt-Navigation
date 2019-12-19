import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonManagementService } from 'src/app/services/button-management.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit
{

  constructor(private router: Router, private bM: ButtonManagementService)
  {
    
  }

  ngOnInit()
  {

  }

  returnToStartPage(): void
  {
    this.router.navigate(["/"]);
  }

  toAngebote(): void
  {
    this.router.navigate(["Angebote"]);
  }
  toSortiments():void
  {
    this.router.navigate(["Sortiments"])
  }

  changeNavigationButton(): void
  {
    // Damit der "Navigation starten" Button klickbar wird.
    this.bM.navigationButtonDisabled = false;

    this.returnToStartPage();
  }

  
}
