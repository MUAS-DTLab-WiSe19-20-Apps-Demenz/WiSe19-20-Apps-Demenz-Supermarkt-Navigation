import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-shop-navigation',
  templateUrl: './shop-navigation.component.html',
  styleUrls: ['./shop-navigation.component.css']
})
export class ShopNavigationComponent implements OnInit {

  constructor(private router: Router, private navigationService: NavigationService) { }

  private continueNavigation()
  {
    this.navigationService.continueNavigation();
    this.router.navigate(["shopNavigation"]);
  }

  private returnToStartPage()
  {
    this.router.navigate(["/"]);
  }

  ngOnInit() {
  }

}
