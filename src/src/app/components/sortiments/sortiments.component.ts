import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { ElementSchemaRegistry } from '@angular/compiler';
import { ShopElements } from 'src/app/enums/shop-elements.enum';
@Component({
  selector: 'app-sortiments',
  templateUrl: './sortiments.component.html',
  styleUrls: ['./sortiments.component.css']
})
export class SortimentsComponent implements OnInit {

  constructor(private router: Router){}

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
 // getSortiment(element: string): String {
   // for (const key in ShopElements) {
     //   if (key == element) {
       //     return key;   
      //  }
       // else {
       //     return null;
      //  }
  //  }
//}

  

  

}
