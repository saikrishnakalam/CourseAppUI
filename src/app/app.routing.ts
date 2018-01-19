import { Component } from '@angular/core';
import { CoursePageComponent } from './courses/course-page.component';
import { AuthorPageComponent } from './author/author-page.component';
import { HomeComponent } from './home.component';
import { RouterModule} from '@angular/router';

const ROUTES = [
    {path:'home', component:HomeComponent},
    {path:'author', component:AuthorPageComponent},
    {path:'course', component:CoursePageComponent},
    {path:'**', Component:HomeComponent}]

export const APP_ROUTING = RouterModule.forRoot(ROUTES);