import { Gender } from "./gender";
import { Address } from "./address";

export class Employee{
    constructor(public emplID:number, public fName:string, public lName:string, public mName:string, 
        public age:number, public gender:Gender, public address:Address,public salary:number,public newEmp:boolean){}
}