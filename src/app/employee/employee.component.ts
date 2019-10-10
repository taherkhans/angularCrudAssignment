import { EmployeeService } from './../services/employee.service';
import { Employee } from './../models/employee';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  employees: Employee[];
  selectedEmpId: number;
  confirmDelete = false;
  constructor(private route: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.selectedEmpId = +this.activatedRoute.snapshot.paramMap.get('id');
  }
  employeeDetails() {
    this.route.navigate(['/employee', this.employee.id]);
  }
  editEmployee() {
    this.route.navigate(['/edit', this.employee.id]);
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee.id).subscribe(
      () => {
        console.log(`employee is deleted = ${this.employee.id} `);
      }
    );
  }

}
