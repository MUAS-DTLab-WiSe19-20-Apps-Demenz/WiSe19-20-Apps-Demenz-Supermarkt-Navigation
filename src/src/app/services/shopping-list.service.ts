import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShopElements } from '../enums/shop-elements.enum';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService
{
  private productList: BehaviorSubject<Product[]>;
  private totalPrice: number;

  private productOptions: string[];

  constructor()
  {
    this.setUpNewList();
  }

  public getProductList(): Observable<Product[]>
  {
    return this.productList.asObservable();
  }

  public getNormalProductList(): Product[]
  {
    return this.productList.value;
  }

  private addProductToList(productToAdd: Product)
  {
    let currentArray = this.productList.getValue();

    currentArray.push(productToAdd);

    this.productList.next(currentArray);
  }

  public addGivenProduct(name: string, price: number)
  {
    const penultimateField: Product = this.productList.value[this.productList.value.length - 2];

    penultimateField.adjustProduct(name, price);
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
  }

  private getProductNames(): string[]
  {
    let allElements = Object.keys(ShopElements).filter(key => !isNaN(Number(ShopElements[key])));
    let actualProducts: string[] = [];

    for (let arrayIndex = 0; arrayIndex < allElements.length; arrayIndex++)
    {
       const key = allElements[arrayIndex];
       
       if (!this.isNotAProductName(key.toString()))
       {
          actualProducts.push(key.toString());
       }
    }

    return actualProducts;
  }

  public isNotAProductName(input: string): boolean
  {
    let result: boolean = false;

    if (input === ShopElements[ShopElements.Path] ||
        input === ShopElements[ShopElements.Wall] ||
        input === ShopElements[ShopElements.Shelf] ||
        input === ShopElements[ShopElements.Entrance] ||
        input === ShopElements[ShopElements.Checkout])
    {

      result = true;
    }

    return result;
  }

  public setUpNewList(): void
  {
    this.productList = new BehaviorSubject<Product[]>([]);;

    let product_1 = new Product("", -1, this);
    let product_2 = new Product("", -1, this);

    this.productOptions = this.getProductNames();

    product_1.setFieldIsDisabled(false);

    this.addProductToList(product_1);
    this.addProductToList(product_2);

    this.totalPrice = -1;
  }

  public getTotalPrice(): number
  {
    return Number(this.totalPrice.toPrecision(5));
  }

  public getProductOptions(): string[]
  {
    return this.productOptions;
  }
}
