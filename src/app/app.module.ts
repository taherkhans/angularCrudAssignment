import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListEmployeesComponent } from './listEmployees/listEmployees.component';
import { CreateEmployeeComponent } from './createEmployee/createEmployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFilterPipe } from './employee-filter.pipe';


const appRoutes: Routes = [
   { path: 'employee-list', component: ListEmployeesComponent },
   { path: 'edit/:id', component: CreateEmployeeComponent },
   { path: 'employee/:id', component: EmployeeDetailsComponent },
   { path: '', redirectTo: '/employee-list', pathMatch: 'full' }
];

@NgModule({
   declarations: [
      AppComponent,
      ListEmployeesComponent,
      CreateEmployeeComponent,
      EmployeeComponent,
      EmployeeDetailsComponent,
      EmployeeFilterPipe
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
