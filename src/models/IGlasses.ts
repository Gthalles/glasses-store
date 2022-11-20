import { ILens } from "./ILens";

export interface IGlasses {
    id: number;
    name: string;
    brand: string;
    description: string;
    category: string;
    color: string;
    size: string;
    image: string;
    lens?: ILens;
    price: number;
}
