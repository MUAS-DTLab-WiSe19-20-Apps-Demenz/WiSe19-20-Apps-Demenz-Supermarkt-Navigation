import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit
{
  @Input()
  public productInstance: Product;
  
  constructor(private listService: ShoppingListService) { }

  ngOnInit() { }
}
