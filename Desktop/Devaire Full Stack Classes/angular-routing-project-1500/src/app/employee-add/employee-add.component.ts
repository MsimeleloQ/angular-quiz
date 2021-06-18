import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Models/employees';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  providers: [EmployeeService]
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private _httpClient: HttpClient, private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    
  }

  addEmployee(){
    console.log(this.employee);
    this._employeeService.addNewEmployee(this.employee).subscribe(result => {
      console.log('Employee added successfully.')
      this._router.navigate(['/employees']);
    }, (error) => { console.log(error);})
  }
  resetAll(){
    this.employee = new Employee();
  }

}
