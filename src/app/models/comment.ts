import { User } from "./user";

export class Comment {
    Id : number;
    Rating : number;
    CommentText : string;
    ClientId : number;
    User : User;
}