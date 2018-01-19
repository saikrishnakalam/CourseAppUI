import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Employee} from './employee';
import {Gender} from './gender';
import {Address} from './address';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})

export class EmployeeFormComponent implements OnInit {
    
      constructor() { }
      employee:Employee = new Employee(0,"","","",0,Gender.Male,new Address("","","",""),0,true )  
      
      @Output()
      newEmployeeAdded:EventEmitter<Employee> = new EventEmitter<Employee>();
      onSubmit(){
        this.newEmployeeAdded.emit(this.employee);
        this.employee = new Employee(0,"","","",0,Gender.Male,new Address("","","",""),0,true  );                                
        }
        getKeysforGender(){
          return Object.keys(Gender);
        }
      
      ngOnInit() {
      }
    }
