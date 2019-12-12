import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { StartPageComponent } from '../start-page/start-page.component';
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

  returnToStartPageModified(): void
  {
    this.notifyButtonManagement();
    this.router.navigate(["/"]);
  }

  // Damit der "Navigation starten" Button klickbar wird.
  notifyButtonManagement(): void
  {
    this.bM.navigationButtonDisabled = false;
  }
}
