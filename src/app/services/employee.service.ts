import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'http://localhost:3000/employees';
  constructor(private httpCllient: HttpClient) { }
  getEmployees(): Observable<Employee[]> {
    return this.httpCllient.get<Employee[]>(this.baseUrl);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.httpCllient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpCllient.post<Employee>(this.baseUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.httpCllient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteEmployee(id: number): Observable<void> {
    return this.httpCllient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
