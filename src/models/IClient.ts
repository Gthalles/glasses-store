import { IAddress } from "./IAddress";
import { IUser } from "./IUser";

export interface IClient {
    id: number;
    user: IUser;
    address: IAddress;
    preferences: any;
    purchases: any[];
}
