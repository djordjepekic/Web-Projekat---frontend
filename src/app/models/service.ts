export class Service {
    Id : number;
    Name : string;
    Logo : string;
    Email : string;
    Description : string;
    Verified : boolean;

    constructor (
        name : string, 
        logo : string,  
        email: string, 
        description: string) {
    this.Name = name;
    this.Logo = logo;
    this.Email = email;
    this.Description = description;
    }
}

