import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { AuthorModule } from './author/author.module';
import { CourseModule } from './courses/course.module';
import{FormsModule, ReactiveFormsModule} from'@angular/forms';
import { HomeComponent } from './home.component'
import { APP_ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    AuthorModule,
    CourseModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING                 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
