import { ShoppingListService } from '../services/shopping-list.service';

export class Product
{
    private static listCounter = 0;

    private name: string;

    private listNumber: number;

    private price: number;

    private fieldIsDisabled: boolean = true;

    constructor(name: string, private listService: ShoppingListService)
    {
        Product.listCounter++;

        this.name = name;
        this.listNumber = Product.listCounter;
    }

    public adjustProduct(nameInput: string)
    {
        this.name = nameInput;

        if (this.name !== "")
        {
            this.listService.adjustList(this);
        }
        else
        {
            this.listService.removeField(this);
        }
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
