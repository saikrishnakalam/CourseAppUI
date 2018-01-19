import { CourseService } from './course.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from './course';
import { Skillevel } from './skillevel';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
//@Output()
//newCourseAdded:EventEmitter<Course>= new EventEmitter<Course>();
course=new Course('',-1,Skillevel.Beginner,'','',true);
  constructor(private service:CourseService) { }

  onSubmit(){
    this.service.save(this.course);
    this.course = new Course('',-1,Skillevel.Beginner,'','',true);                                
    }
    
  getKeys(){
    return Object.keys(Skillevel);
  }

  ngOnInit() {
  }

}
