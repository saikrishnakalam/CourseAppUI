import { Component, OnInit, Input } from '@angular/core';
import {Employee} from './employee';
import {Gender} from './gender';
import {Address} from './address';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
@Input() employeesArr:Array<Employee>=[]

  ngOnInit() {
  }
            
  }


