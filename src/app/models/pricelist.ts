import { User } from "./user";

export class PriceList {
    Id : number;
    UserId : number;
    User : User;
    TimeOfReservation : Date;
    TimeToReturn : Date;

    constructor (
        timeOfReservation: Date,
        timeToReturn : Date) {
    this.TimeOfReservation = timeOfReservation;
    this.TimeToReturn = timeToReturn;
    }
}