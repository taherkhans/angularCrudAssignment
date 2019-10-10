import { EmployeeService } from './../services/employee.service';
import { Employee } from './../models/employee';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './listEmployees.component.html',
  styleUrls: ['./listEmployees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  searchbyName: string;
  constructor(private employeeService: EmployeeService, private route: Router) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data) => this.employees = data);
  }
  employeeDetails(employeeid: number) {
    this.route.navigate(['/employee', employeeid]);
  }


}
