import { Service } from "./service";

export class Office {
    Id : number;
    Name : string;
    Image : string;
    Adress : string;
    Longitude : number;
    Latitude : number;
    ServiceId : number;
    Service : Service;
}