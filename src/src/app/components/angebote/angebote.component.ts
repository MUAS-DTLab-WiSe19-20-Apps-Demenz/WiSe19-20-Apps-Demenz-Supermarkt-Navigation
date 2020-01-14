import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Deals } from 'src/app/enums/deals.enum';


@Component({
  selector: 'app-angebote',
  templateUrl: './angebote.component.html',
  styleUrls: ['./angebote.component.css']
})
export class AngeboteComponent implements OnInit {

  constructor(private router: Router, private listService: ShoppingListService) 
  { }

  ngOnInit() {
  }

  backToShoppingList(): void
  {
    this.router.navigate(["shoppingList"]);
  }


  addProduct(product:string): void
  {
    this.listService.addGivenProduct(product, this.getDealsPrice(product));
    this.router.navigate(["shoppingList"]);
  }


  products = [
    {
      sort: 'Obst',
      item: [
        {name: 'Äpfel', price: Deals.Äpfel},
        {name: 'Bananen', price: Deals.Bananen },
      ]
    },
    {
      sort: 'Gemüse',
      item: [
        {name: 'Karotte', price: Deals.Karotte },
      ]
    },
   
    
    {
      sort: 'Kuchen',
      item: [
        {name: 'Donuts', price: Deals.Donuts },
      ]
    },
    {
      sort: 'Backshop',
      item: [
        {name: 'Eiweißbrot', price: Deals.Eiweißbrot},
        {name: 'Buttercroissant', price:Deals.Buttercroissant },
      ]
    }
  ];
  
  
  getDealsPrice(element: string): number {
   switch (element){
     case "Äpfel":{
       return 1.35;
     }
     case "Bananen":{
      return 1.69;
    }
    
    case "Karotte":{
      return 0.99;
    }
    case "Donuts":{
      return 0.39;
    }
    case "Eiweißbrot":{
      return 0.59;
    }
    case "Buttercroissant":{
      return 0.29;
    }
    default:
      return 0;
   }
  }
}  


