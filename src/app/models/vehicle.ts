import { Service } from "./service";
import { User } from "./user";
import { VehicleType } from "./vehicletype";
import { QUERY_READ_ELEMENT_REF } from "@angular/core/src/render3";

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

    constructor (
        model : string,  
        manufacturer: string, 
        year: number,
        description : string,
        available : boolean,
        image : string,
        vehicleTypeId : number,
        vehicleType : VehicleType,
        serviceId : number,
        service : Service,
        userId : number,
        user : User) {
    this.Model = model;
    this.Manufacturer = manufacturer;
    this.Year = year;
    this.Description = description;
    this.Available = available;
    this.Image = image;
    this.VehicleTypeId = vehicleTypeId;
    this.VehicleType = vehicleType;
    this.ServiceId = serviceId;
    this.Service = service;
    this.UserId = userId;
    this.User = user;
    }
}