
import { Component, OnInit, Input } from '@angular/core';
import {Skillevel} from './skillevel';
import {Course} from './course'
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  //course:Course=new Course('',-1,Skillevel.Beginner,'','',true);
courses:Array<Course>=this.courseservice.courses;
  constructor(private courseservice:CourseService) { }
//@Input()
//courses:Course[]=[];

  ngOnInit() {
  }

  toUpperCase(input:string){
    return input.toUpperCase();
  }

}
