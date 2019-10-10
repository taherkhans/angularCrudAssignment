import { EmployeeService } from './../services/employee.service';
import { Employee } from './../models/employee';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Locations } from '../models/locations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createEmployee',
  templateUrl: './createEmployee.component.html',
  styleUrls: ['./createEmployee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') createEmployeeForm: NgForm;
  formTitle: string;
  employee: Employee;

  locations: Locations[] = [
    {
      id: 1,
      location: 'bangalore'
    },
    {
      id: 2,
      location: 'hyderabad'
    },
    {
      id: 3,
      location: 'kochi'
    }
  ];
  constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }
  getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        age: null,
        firstName: null,
        lastName: null,
        eyecolor: null,
        company: null,
        email: null,
        gender: null,
        location: null,
        phone: null,
        address: null,
        designation: null,
        photoPath: null
      };
      this.formTitle = 'create new employee';
      this.createEmployeeForm.reset();
    } else {
      this.formTitle = 'edit employee';
      this.employeeService.getEmployee(id).subscribe(employee => this.employee = employee);
    }
  }
  saveEmployee(): void {
    if (this.employee.id === null) {

      this.employeeService.saveEmployee(this.employee).subscribe((data: Employee) => {
        console.log(data);
        this.createEmployeeForm.reset();
        this.router.navigate(['employee-list']);
      });
    } else {
      this.employeeService.updateEmployee(this.employee).subscribe(() => {
        this.createEmployeeForm.reset();
        this.router.navigate(['employee-list']);
      });
    }
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee.id).subscribe(
      () => {
        console.log(`employee is deleted = ${this.employee.id} `;
        this.router.navigate(['employee-list']);
      })
    );
  }
}
