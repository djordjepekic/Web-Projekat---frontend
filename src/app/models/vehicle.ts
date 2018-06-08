import { Service } from "./service";
import { User } from "./user";
import { VehicleType } from "./vehicletype";

export class Vehicle {
    Id : number;
    Model : string;
    Manufacturer : string;
    Year : number;
    Description : string;
    Available : boolean;
    Image : string;
    VehicleTypeId : number;
    VehicleType : VehicleType;
    ServiceId : number;
    Service : Service;
    UserId : number;
    User : User;
}