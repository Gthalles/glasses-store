import { IContactLens } from "./IContactLens";
import { IGlasses } from "./IGlasses";
import { ILens } from "./ILens";

export interface IShoppingCart {
	glasses?: IGlasses[];
	lenses?: ILens[];
	contactLens?: IContactLens[];
	total: number;
}