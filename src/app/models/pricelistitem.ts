import { PriceList } from "./pricelist";
import { Vehicle } from "./vehicle";

export class PriceListItem {
    Id : number;
    Price : number;
    VehicleId : number;
    Vehicle : Vehicle;
    PriceListId : number;
    PriceList : PriceList;

    constructor (
        price : number,  
        vehicleId: number) {
    this.Price = price;
    this.VehicleId = vehicleId;

    }
}