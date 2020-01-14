import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-navigation-end',
  templateUrl: './shop-navigation-end.component.html',
  styleUrls: ['./shop-navigation-end.component.css']
})
export class ShopNavigationEndComponent implements OnInit {

  constructor(private router: Router, private navigationService: NavigationService) { }

  private appReset(): void
  {
    this.navigationService.resetApp();

    this.router.navigate(["/"]);
  }

  private returnToStartPage(): void
  {
    this.router.navigate(["/"]);
  }

  ngOnInit() {
  }

}
