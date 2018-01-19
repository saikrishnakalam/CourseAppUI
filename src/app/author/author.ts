import { Gender } from "../employee/gender";

export class Author{
    constructor(public Id:number, public fName:string, public lName:string, public mName:string, 
        public age:number, public gender:Gender, public newAuthor:boolean){}
}