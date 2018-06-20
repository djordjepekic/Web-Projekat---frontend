export class ReservationModel {
    UserName : string;
    VehicleId : number;
    TimeOfReservation : Date;
    TimeToReturn : Date;

    constructor (
        username : string,
        vehicleid : number,
        timeOfReservation: Date,
        timeToReturn : Date) {
    this.UserName = username;
    this.VehicleId = vehicleid;
    this.TimeOfReservation = timeOfReservation;
    this.TimeToReturn = timeToReturn;
    }
}