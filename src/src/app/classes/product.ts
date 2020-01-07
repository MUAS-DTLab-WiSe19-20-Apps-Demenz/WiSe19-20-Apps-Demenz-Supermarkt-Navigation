import { ShoppingListService } from '../services/shopping-list.service';
import { ShopElements } from '../enums/shop-elements.enum';

export class Product
{
    private static listCounter = 0;

    private name: string;

    private listNumber: number;

    private price: number;

    private fieldIsDisabled: boolean = true;

    constructor(name: string, price: number, private listService: ShoppingListService)
    {
        Product.listCounter++;

        this.name = name;
        this.price = price;
        this.listNumber = Product.listCounter;
    }

    public adjustProduct(nameInput: string, givenPrice: number)
    {
        console.log(nameInput);
        this.name = nameInput;
        let oldPrice = this.getPrice();

        if (givenPrice < 0)
        {
            this.price = this.findPrice();
        }
        else
        {
            this.price = givenPrice;
        }

        if (this.price !== oldPrice)
        {
            this.listService.calculateTotalPrice();
        }

        if (this.name !== "")
        {
            this.listService.adjustList(this);
        }
        else
        {
            this.listService.removeField(this);
        }
    }

    private findPrice(): number
    {
        let amount: number = ShopElements[this.name];

        if (amount == null || this.listService.isNotAProductName(this.name))
        {
            amount = -1;
        }

        return amount;
    }

    public getName(): string
    {
        return this.name;
    }

    public getPrice(): number
    {
        return this.price;
    }

    public getListNumber(): number
    {
        return this.listNumber;
    }

    public isFieldDisabled(): boolean
    {
        return this.fieldIsDisabled;
    }

    public setFieldIsDisabled(newValue: boolean)
    {
        this.fieldIsDisabled = newValue;
    }

    public setListNumber(newNumber: number)
    {
        if (newNumber > 0)
        {
            this.listNumber = newNumber;
        }
    }

    public static decrementListCounter()
    {
        this.listCounter--;
    }
}
