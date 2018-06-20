export class ReservationModel {
    UserName : string;
    VehicleId : number;
    TimeOfReservation : Date;
    TimeToReturn : Date;
    TakeOfficeId : number;
    ReturnOfficeId : number;

    constructor (
        username : string,
        vehicleid : number,
        timeOfReservation: Date,
        timeToReturn : Date,
        takeofficeid : number,
        returnofficeid: number) {
    this.UserName = username;
    this.VehicleId = vehicleid;
    this.TimeOfReservation = timeOfReservation;
    this.TimeToReturn = timeToReturn;
    this.TakeOfficeId = takeofficeid;
    this.ReturnOfficeId = returnofficeid;
    }
}