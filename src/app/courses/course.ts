import {Skillevel} from './skillevel';

export class Course{
    constructor(public Name:String, public id:number, public skillevel:Skillevel, public duration:string, 
        public price:String,public newCore:boolean){}
}