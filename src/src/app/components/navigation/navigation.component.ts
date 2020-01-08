import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonManagementService } from 'src/app/services/button-management.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private bM: ButtonManagementService, private navigationService: NavigationService)
  {
    
  }

  ngOnInit() {
  }

  returnToStartPage(): void
  {
    this.router.navigate(["/"]);
  }

  changeNavigationButton(): void
  {
    this.returnToStartPage();
  }

  private startNavigation(): void
  {
    this.navigationService.startNavigation();
    this.router.navigate(["shopNavigation"]);
  }
}
