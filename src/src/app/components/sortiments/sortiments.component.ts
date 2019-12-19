import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sortiments',
  templateUrl: './sortiments.component.html',
  styleUrls: ['./sortiments.component.css']
})
export class SortimentsComponent implements OnInit {

  constructor(private router: Router){}
s
  ngOnInit() {
  }
  goBack():void
  {
    this.returnToShopingList()
  }
  returnToShopingList(): void
  {
    this.router.navigate(["shoppingList"]);
  }
 

}
