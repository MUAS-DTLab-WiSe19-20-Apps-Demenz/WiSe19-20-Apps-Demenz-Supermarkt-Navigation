import { element } from 'protractor'

export enum ShopElements
{
    // Navigationselemente
    Path, Shelf, Wall, Checkout, Entrance,

    // Produkte
    Äpfel = 1.69,Bananen = 1.99,Paprika = 0.89,Karotte = 1.19,
    Brezen=0.29,Milchbrötchen = 0.49,Törtchen=2.09,
    Donuts=0.49,Eiweißbrot =0.79,Buttercroissant = 0.59
}

function getPrice(element:ShopElements):number{

    return element;
}

//function getSortiment(element: string): String {
  //  for (const key in ShopElements) {
    //    if (key == element) {
      //      return key;   
       // }
        //else {
          //  return null;
       // }
   // }
//}
