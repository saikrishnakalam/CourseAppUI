import { AuthorService } from './author.service';
import { AuthorFormComponent } from './author-form.component';
import { AuthorPageComponent } from './author-page.component';
import { AuthorListComponent } from './author-list.component';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        FormsModule,ReactiveFormsModule,CommonModule
    ],
    providers:[AuthorService],
    exports:[AuthorListComponent,AuthorPageComponent,AuthorFormComponent],
    declarations:[AuthorListComponent,AuthorPageComponent,AuthorFormComponent]
})
export class AuthorModule{ }