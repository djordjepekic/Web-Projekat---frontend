import { Service } from "./service";

export class Office {
    Id : number;
    Image : string;
    Adress : string;
    Longitude : number;
    Latitude : number;
    ServiceId : number;
    Service : Service;

    constructor (
        image : string,  
        adress: string, 
        latitude: number,
        longitude : number,
        serviceid : number,
        ) {
    this.Adress = adress;
    this.Image = image;
    this.Latitude = latitude;
    this.Longitude = longitude;
    this.ServiceId = serviceid;
    }
}