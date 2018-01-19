import { EmployeePageComponent } from './employee-page.component';
import { EmployeeFormComponent } from './employee-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/Forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports:[EmployeeFormComponent,EmployeeListComponent,EmployeePageComponent],
  declarations: [EmployeeFormComponent,EmployeeListComponent,EmployeePageComponent]
})
export class EmployeeModule { }
