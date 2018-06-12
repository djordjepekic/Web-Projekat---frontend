export class UserRegistration{
    Username : string;
    Password : string;
    FullName : string;
    Role : string;
    Email: string;
    ConfirmPassword: string;
    DateOfBirth: Date;

    constructor (username: string, 
                 password: string, 
                 role : string, 
                 email: string, 
                 confPassword: string,
                 dateofbirth: Date,
                 fullname : string) {
        this.Username = username;
        this.Password = password;
        this.Role = role;
        this.Email = email;
        this.ConfirmPassword = confPassword;
        this.DateOfBirth = dateofbirth;
        this.FullName = fullname;
    }
}