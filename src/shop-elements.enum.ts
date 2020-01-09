export enum ShopElements
{
    // Navigationselemente
    Path, Shelf, Wall, Checkout, Entrance,

    // Produkte
    Apfel = "Apfel",Birne = "Birne",Paprika = "Paprika",Karotte = "Karotte",
    Brezen="Brezzen",Milchbrötchen = "Milchbrötchen",Törtchen="Törtchen",
    Donuts="Donuts",Eiweißbrot ="Eiweißbrot",Buttercroissant = "Buttercroissant"
}
function getSortiment(element: string): String {
    for (const key in ShopElements) {
        if (key == element) {
            return key;   
        }
        else {
            return null;
        }
    }
}

getSortiment("Apfel");