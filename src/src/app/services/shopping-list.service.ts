import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService
{
  private productList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private totalPrice: number;

  constructor()
  {
    let product_1 = new Product("", -1, this);
    let product_2 = new Product("", -1, this);

    product_1.setFieldIsDisabled(false);

    this.addProductToList(product_1);
    this.addProductToList(product_2);

    this.totalPrice = -1;
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
    let newProduct = new Product("", -1, this);
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
    return this.totalPrice < 0;
  }

  public calculateTotalPrice()
  {
    this.totalPrice = -1;
    let additionCounter = 0;

    for (let listIndex = 0; listIndex < this.productList.getValue().length; listIndex++)
    {
      let priceOfProduct = this.productList.getValue()[listIndex].getPrice();

      if (priceOfProduct >= 0)
      {
        this.totalPrice += priceOfProduct;
        additionCounter++;
      }
    }

    if (additionCounter > 0)
    {
      this.totalPrice++;
    }

      /* Versuch aufgegeben, wird hier aber noch verweilen.
      
      let firstProduct = this.productList.getValue()[0];
      let secondProduct = this.productList.getValue()[1];

      // To-Do: Besseres Kriterium für leere Liste überlegen.
      if (firstProduct.getPrice() < 0 && (secondProduct.isFieldDisabled() == true || secondProduct.getPrice() < 0))
      {
        this.totalPrice = -1;
      }
      else
      {
        if (this.totalPrice < 0)
        {
          this.totalPrice++;
        }

        this.totalPrice -= oldPrice;
        this.totalPrice += newPrice;
      } */
  }

  public getTotalPrice(): number
  {
    return this.totalPrice;
  }
}
