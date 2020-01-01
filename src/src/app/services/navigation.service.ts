import { Injectable } from '@angular/core';
import { ShopElements } from '../enums/shop-elements.enum';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService
{
  private s: ShopElements = ShopElements.Shelf;
  private p: ShopElements = ShopElements.Path;
  private w: ShopElements = ShopElements.Wall;
  private co: ShopElements = ShopElements.Checkout;
  private e: ShopElements = ShopElements.Entrance;

  private firstRow: ShopElements[]      = [this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w];
  private secondRow: ShopElements[]     = [this.w, this.p, this.p, this.p, this.s, this.s, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.w];
  private thirdRow: ShopElements[]      = [this.w, this.p, this.p, this.p, this.s, this.s, this.p, this.p, this.s, this.s, this.s, this.p, this.p, this.p, this.w];
  private fourthRow: ShopElements[]     = [this.w, this.s, this.p, this.p, this.s, this.s, this.p, this.p, this.s, this.s, this.s, this.p, this.p, this.p, this.w];
  private fifthRow: ShopElements[]      = [this.w, this.s, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.w];
  private sixthRow: ShopElements[]      = [this.w, this.s, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.w];
  private seventhRow: ShopElements[]    = [this.w, this.s, this.p, this.p, this.s, this.s, this.p, this.s, this.s, this.p, this.s, this.s, this.p, this.s, this.w];
  private eigthRow: ShopElements[]      = [this.w, this.p, this.p, this.p, this.s, this.s, this.p, this.s, this.s, this.p, this.s, this.s, this.p, this.s, this.w];
  private ninethRow: ShopElements[]     = [this.w, this.s, this.p, this.p, this.s, this.s, this.p, this.s, this.s, this.p, this.s, this.s, this.p, this.s, this.w];
  private tenthRow: ShopElements[]      = [this.w, this.s, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.p, this.w];
  private eleventhRow: ShopElements[]   = [this.w, this.s, this.p, this.p, this.p, this.p, this.p, this.s, this.s, this.p, this.p, this.p, this.p, this.p, this.w];
  private twelfthRow: ShopElements[]    = [this.w, this.p, this.p, this.p, this.co, this.p, this.p, this.s, this.s, this.p, this.p, this.p, this.e, this.p, this.w];
  private thirteenthRow: ShopElements[] = [this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w, this.w];

  private navigationMap: ShopElements[][] = [this.firstRow, this.secondRow, this.thirdRow, this.fourthRow, this.fifthRow, this.sixthRow, this.seventhRow, this.eigthRow, this.ninethRow, this.tenthRow, this.eleventhRow, this.twelfthRow, this.thirteenthRow];

  private currentPosition: [number, number];

  constructor(private listService: ShoppingListService)
  {
    this.currentPosition = this.findCoordinates(this.e);
  }

  public findCoordinates(field: ShopElements): [number, number]
  {
    let position: [number, number];

    let positionFound: boolean = false;

    for (let yIndex = 0; yIndex < this.navigationMap.length && !positionFound; yIndex++)
    {
      let currentRow = this.navigationMap[yIndex];

      for (let xIndex = 0; xIndex < currentRow.length && !positionFound; xIndex++)
      {
        if (field == currentRow[xIndex])
        {
          positionFound = true;

          position = [xIndex, yIndex];
        }
      } 
    }

    console.log("SUCHE BEENDET")

    return position;
  }
}
