import { Injectable } from '@angular/core';
import { ShopElements } from '../enums/shop-elements.enum';
import { ShoppingListService } from './shopping-list.service';
import { Product } from '../classes/product';
import { ShopNavigationComponent } from '../components/shop-navigation/shop-navigation.component';
import { ButtonManagementService } from './button-management.service';

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

  // Nur rechteckige Layouts.
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
  private xBorder: number;
  private yBorder: number;

  private currentProduct: Product;

  constructor(private listService: ShoppingListService, private buttonService: ButtonManagementService)
  {
    this.currentPosition = this.findCoordinates(this.e);
    
    this.xBorder = this.navigationMap[0].length;
    this.yBorder = this.navigationMap.length;
  }

  public startNavigation(): void
  {
    this.currentProduct = this.listService.getNormalProductList()[0];
    let productName: string = this.currentProduct.getName();

    this.buttonService.productNavigationEnded = this.isEndOfList();
  }

  public continueNavigation(): void
  {
    let currentListNumber = this.currentProduct.getListNumber();
    const productList = this.listService.getNormalProductList();

    if (currentListNumber + 2 != productList.length)
    {
      this.currentProduct = productList[currentListNumber];
    }

    this.buttonService.productNavigationEnded = this.isEndOfList();
  }
  
  private isEndOfList(): boolean
  {
    return this.currentProduct.getListNumber() + 2 == this.listService.getNormalProductList().length;
  }

  public resetApp(): void
  {
    Product.resetListCounter();

    this.listService.setUpNewList();

    this.buttonService.navigationButtonDisabled = true;
  }

  private findCoordinates(field: ShopElements): [number, number]
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

    return position;
  }

  // Berechnung der Luftlinie zwischen zwei Punkten über den Pythagoras.
  private calculateBeeLine(startCoordinates: [number, number], destinationCoordinates: [number, number]): number
  {
    return Math.sqrt(Math.pow(destinationCoordinates[0] - startCoordinates[0], 2) + Math.pow(destinationCoordinates[1] - startCoordinates[1], 2));
  }

  private getField(xPosition: number, yPosition: number): ShopElements
  {
    return this.navigationMap[yPosition][xPosition];
  }

  private isValidField(fieldCoordinates: [number, number]): boolean
  {
    let isValid: boolean = false;

    if (fieldCoordinates[0] >= 0 ||
        fieldCoordinates[0] < this.xBorder ||
        fieldCoordinates[1] >= 0 ||
        fieldCoordinates[1] < this.yBorder)
    {
      let fieldType = this.getField(fieldCoordinates[0], fieldCoordinates[1]);

      if (fieldType !== this.w && fieldType !== this.s)
      {
        isValid = true;
      }
    }

    return isValid;
  }

  private findSmallestDistanceField(openList: [number, number][], distances: Map<[number, number], number>, destinationCoordinates: [number, number]): [[number, number], number]
  {
    let currentSmallest: [number, number];
    let currentSmallestDistance = Infinity;
    let distanceToReturn: number = 0;

    for (let coordinates of openList)
    {
      let distanceToField = this.getDistance(coordinates, distances);
      let combinedDistance = distanceToField + this.calculateBeeLine(coordinates, destinationCoordinates);

      if (combinedDistance < currentSmallestDistance)
      {
        currentSmallestDistance = combinedDistance;
        distanceToReturn = distanceToField;
        currentSmallest = coordinates;
      }
    }

    return [currentSmallest, distanceToReturn];
  }

  private AStar_Algorithm(startCoordinates: [number, number], destinationCoordinates: [number, number])
  {
    // Initialisierung
    
    let distances: Map<[number, number], number> = new Map();
    let predecessors: Map<[number, number], [number, number]> = new Map();
    let openList: [number, number][] = [startCoordinates];
    let surroundingFields: [number, number][] = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    for (let yIndex = 0; yIndex < this.navigationMap.length; yIndex++)
    {
      let currentRow = this.navigationMap[yIndex];

      for (let xIndex = 0; xIndex < currentRow.length; xIndex++)
      {
        distances.set([xIndex, yIndex], Infinity);
      }
    }

    distances.set(startCoordinates, 0);

    // Streckenberechnung

    let destinationReached: boolean = false;

    while (openList.length != 0 && !destinationReached)
    {
      // Auswahl des Feldes mit der kürzesten Distanz zum Start- bzw. Zielfeld aus offener Liste

      let fieldDetails = this.findSmallestDistanceField(openList, distances, destinationCoordinates);
      let currentField: [number, number] = fieldDetails[0];

      // Kontrolle der Distanzen der umliegenden Felder

      for (let coordinatesIndex = 0; coordinatesIndex < surroundingFields.length; coordinatesIndex++)
      {
        const adjustment = surroundingFields[coordinatesIndex];
        
        let otherField: [number, number] = [currentField[0] + adjustment[0], currentField[1] + adjustment[1]];

        // Kontrolle, ob das Feld überhaupt erreichbar ist

        if (this.isValidField(otherField))
        {
          const currentFieldDistance: number = fieldDetails[1];
          const otherFieldDistance: number = this.getDistance(otherField, distances);

          // Kontrolle, ob der Weg über das zurzeit angeschaute Feld zu dem kontrollierten Feld kürzer ist, als der derzeitige Weg zum kontrollierten Feld

          if (otherFieldDistance > currentFieldDistance + 1)
          {
            // Anpassen von Distanzen und der offenen Liste

            distances.set(otherField, currentFieldDistance + 1);
            predecessors.set(otherField, currentField);

            openList.push(otherField);
          }
        }
      }

      // Entfernen des zurzeit angeschauten Feldes aus der offenenen Liste

      const indexOfField: number = openList.indexOf(currentField);

      openList.splice(indexOfField, 1);

      // Kontrolle, ob Ziel erreicht
      
      if (currentField[0] == destinationCoordinates[0] && currentField[1] == destinationCoordinates[1])
      {
        destinationReached = true;
        this.currentPosition = destinationCoordinates;
      }
    }
    
    console.log(this.getCorrectPath(predecessors, startCoordinates, destinationCoordinates));
  }

  private getDistance(fieldInput: [number, number], distancesMap: Map<[number, number], number>): number
  {
    let distanceToReturn: number = 0;
    const entryArray = distancesMap.entries();

    for (let entry of entryArray)
    {
      const entryXCoordinate = entry[0][0];
      const entryYCoordinate = entry[0][1];

      if (entryXCoordinate == fieldInput[0] && entryYCoordinate == fieldInput[1])
      {
        distanceToReturn = entry[1];
      }
    }

    return distanceToReturn;
  }

  private getCorrectPath(predecessors: Map<[number, number], [number, number]>, startCoordinates: [number, number], destinationCoordinates: [number, number]): [number, number][]
  {
    let correctPath: [number, number][] = [];

    let currentPredecessor: [number, number] = [-1, -1];
    let currentField: [number, number] = destinationCoordinates;

    while (currentPredecessor[0] != startCoordinates[0] || currentPredecessor[1] != startCoordinates[1])
    {
      let allEntries = predecessors.entries();

      for (let entry of allEntries)
      {
        if (entry[0][0] == currentField[0] && entry[0][1] == currentField[1])
        {
          currentPredecessor = entry[1];

          correctPath.push(currentField);
          
          currentField = currentPredecessor;
        }
      }
    }

    correctPath.push(startCoordinates);

    correctPath = correctPath.reverse();

    return correctPath;
  }

  public getCurrentProduct(): Product
  {
    return this.currentProduct;
  }
}
