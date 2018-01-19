import { CourseService } from './course.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CoursePageComponent } from './course-page.component';
import { CourseFormComponent } from './course-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [CourseService],
  exports: [CourseListComponent, CoursePageComponent, CourseFormComponent],
  declarations: [ CourseListComponent, CoursePageComponent, CourseFormComponent]
})
export class CourseModule { }
