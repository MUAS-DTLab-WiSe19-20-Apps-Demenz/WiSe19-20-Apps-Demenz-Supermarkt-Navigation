import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { StartPageComponent } from '../start-page/start-page.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit
{

  constructor(private router: Router)
  {
    
  }

  ngOnInit()
  {

  }

  returnToStartPage(): void
  {
    this.notifyStartPage();
    this.router.navigate(["/"]);
  }

  // Damit der "Navigation starten" Button klickbar wird.
  notifyStartPage(): void
  {
    StartPageComponent.updateNavigationButton(false);
  }
  
}
