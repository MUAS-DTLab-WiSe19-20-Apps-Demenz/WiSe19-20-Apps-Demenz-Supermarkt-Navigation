import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService
{
  private productList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor()
  {
    let product_1 = new Product("", this);
    let product_2 = new Product("", this);

    product_1.setFieldIsDisabled(false);

    this.addProductToList(product_1);
    this.addProductToList(product_2);
  }

  public getProductList(): Observable<Product[]>
  {
    return this.productList.asObservable();
  }

  private addProductToList(productToAdd: Product)
  {
    let currentArray = this.productList.getValue();

    currentArray.push(productToAdd);

    this.productList.next(currentArray);
  }

  public adjustList(changedProduct: Product)
  {
    let indexOfProduct = changedProduct.getListNumber() - 1;

    let otherProduct = this.productList.getValue()[indexOfProduct + 1];

    if (otherProduct.isFieldDisabled())
    {
    let newProduct = new Product("", this);
    this.addProductToList(newProduct);

    otherProduct.setFieldIsDisabled(false);
    }
  }

  public removeField(changedProduct: Product)
  {    
      let currentArray = this.productList.getValue();

      for (let listIndex = changedProduct.getListNumber(); listIndex < currentArray.length; listIndex++)
      {
        let currentItem = currentArray[listIndex];

        currentItem.setListNumber(currentItem.getListNumber() - 1);
      }

      Product.decrementListCounter();

      currentArray.splice(changedProduct.getListNumber() - 1, 1);
      
      this.productList.next(currentArray); 
  }

  public isConfirmationButtonDisabled(): boolean
  {
    let isDisabled: boolean = false;

    let firstField = this.productList.getValue()[0];

    if (firstField.getName() === "")
    {
      isDisabled = true;
    }

    return isDisabled;
  }
}
