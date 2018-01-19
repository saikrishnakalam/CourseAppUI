import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {Gender} from './gender';
import {Address} from './address';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {
  employees:Array<Employee>=[
    new Employee(1,'Sai','Kalam','Krishna',25,Gender.Male,new Address('Temple','Texas','WestAdams','76504'),5000,false),
    new Employee(2,'Max','Joe','d',25,Gender.Male,new Address('Temple','Texas','WestAdams','76504'),5000,false),
    new Employee(3,'Roy','Bu','Pad',25,Gender.Male,new Address('Temple','Texas','WestAdams','76504'),5000,false)];

  constructor() { }

  getMaxId(){
    let maxId = 0;
    for(let emp of this.employees){
      if(emp.emplID > maxId){
        maxId = emp.emplID;
      }
    }
    return maxId + 1;
  }

  addNewEmployeeToList(emp:Employee){
      emp.emplID=this.getMaxId();
      this.employees.push(emp);
      emp = new Employee(0,"","","",0,Gender.Male,new Address("","","",""),0,true );
  }
  
  ngOnInit() {
}
}
