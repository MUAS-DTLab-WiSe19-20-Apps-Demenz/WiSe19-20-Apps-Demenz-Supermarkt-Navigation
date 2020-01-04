import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonManagementService } from 'src/app/services/button-management.service';



@Component({
  selector: 'app-angebote',
  templateUrl: './angebote.component.html',
  styleUrls: ['./angebote.component.css']
})
export class AngeboteComponent implements OnInit {

  constructor(private router: Router, public bM: ButtonManagementService) 
  { }

  ngOnInit() {
  }

  backToShoppingList(): void
  {
    this.router.navigate(["shoppingList"]);
  }

}
