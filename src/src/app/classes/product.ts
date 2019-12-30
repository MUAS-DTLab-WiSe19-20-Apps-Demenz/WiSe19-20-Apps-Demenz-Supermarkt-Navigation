import { ShoppingListService } from '../services/shopping-list.service';

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

    public adjustProduct(nameInput: string)
    {
        this.name = nameInput;
        let oldPrice = this.getPrice();
        this.price = this.findPrice();

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
        let amount = -1;

        if (this.name === "Bananen")
        {
            amount = 5;
        }

        if (this.name === "Äpfel")
        {
            amount = 10;
        }

        if (this.name === "Brot")
        {
            amount = 8;
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
