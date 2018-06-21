import { PriceList } from "./pricelist";
import { Vehicle } from "./vehicle";

export class PriceListItemReservationModel {
    PriceListId : number;
    VehicleId : number;

    constructor (
        priceListId : number,  
        vehicleId: number) {
    this.PriceListId = priceListId;
    this.VehicleId = vehicleId;
    }
}