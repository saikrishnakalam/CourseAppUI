import { Course } from './course';
import { Skillevel } from './skillevel';
import { Author } from '../author/author';


export class CourseService {

  courses:Array<Course>=[
    new Course('Angular',1,Skillevel.Beginner,'3Months','$625',false),
    new Course('Java',2,Skillevel.Advance,'2Months','$650',false),
    new Course('Unix',3,Skillevel.Expert,'45Days','$1200',false)]

  constructor() { }

  save(course:Course){
    course.id=this.getMaxId(); 
   this.courses.push(course);
   }

  getMaxId(){
    let maxId= -1;
    for(let a of this.courses){
      if(a.id> maxId){
        maxId = a.id;
      }
    }
  return maxId+1;
  }
  



}
