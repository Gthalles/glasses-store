import { IContactLens } from "./IContactLens";
import { IGlasses } from "./IGlasses";
import { ILens } from "./ILens";

export interface IShoppingCart {
    id: number;
    glasses?: IGlasses[];
    lenses?: ILens[];
    contactLens?: IContactLens[];
    total: number;
}
