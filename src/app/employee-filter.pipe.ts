import { Employee } from './models/employee';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: Employee[], serachbyName: string): Employee[] {
    if (!employees || !serachbyName) {
      return employees;
    }
    return employees.filter(employee => employee.firstName.toLowerCase().indexOf(serachbyName.toLowerCase()) !== -1);
  }

}
