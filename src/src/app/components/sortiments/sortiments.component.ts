import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import { element } from 'protractor';
import { ElementSchemaRegistry } from '@angular/compiler';
import { ShopElements } from 'src/app/enums/shop-elements.enum';
import { ShoppingListService } from 'src/app/services/shopping-list.service';


@Component({
  selector: 'app-sortiments',
  templateUrl: './sortiments.component.html',
  styleUrls: ['./sortiments.component.css']
})
export class SortimentsComponent {
    constructor(private router: Router,private listService:ShoppingListService){}

  ngOnInit() {
  }
  goBack():void
  {
    this.router.navigate(["shoppingList"]);
  
  }

  returnToShoppingList(product:string): void
  {
    
   this.listService.addGivenProduct(product,this.getPrice(product));
    this.router.navigate(["shoppingList"]);
  }
  products = [
    {
      sort: 'Obst',
      item: [
        {name: 'Äpfel', price: ShopElements.Äpfel},
        {name: 'Bananen', price:ShopElements.Bananen },
      ]
    },
    {
      sort: 'Gemüse',
      item: [
        {name: 'Paprika', price: ShopElements.Paprika},
        {name: 'Karotte', price:ShopElements.Karotte },
      ]
    },
    {
      sort: 'Brot & Brötchen',
      item: [
        {name: 'Brezen', price: ShopElements.Brezen},
        {name: 'Milchbrötchen', price:ShopElements.Milchbrötchen },
      ]
    },
    
    {
      sort: 'Kuchen',
      item: [
        {name: 'Törtchen', price: ShopElements.Törtchen},
        {name: 'Donuts', price:ShopElements.Donuts },
      ]
    },
    {
      sort: 'Backshop',
      item: [
        {name: 'Eiweißbrot', price: ShopElements.Eiweißbrot},
        {name: 'Buttercroissant', price:ShopElements.Buttercroissant },
      ]
    }
  ];
  
  getPrice(element: string): number {
   switch (element){
     case "Äpfel":{
       return 1.69;
     }
     case "Bananen":{
      return 1.99;
    }
    case "Paprika":{
      return 0.89;
    }
    case "Karotte":{
      return 1.19;
    }
    case "Brezen":{
      return 0.29;
    }
    case "Milchbrötchen":{
      return 0.49;
    }
    case "Törtchen":{
      return 2.09;
    }
    case "Donuts":{
      return 0.49;
    }
    case "Eiweißbrot":{
      return 0.79;
    }
    case "Buttercroissant":{
      return 0.59;
    }
    default:
      return 0;
   }
  }
}  
