import { User } from "./user";

export class PriceList {
    Id : number;
    UserId : number;
    User : User;
    TimeOfReservation : Date;
    TimeToReturn : Date;
}