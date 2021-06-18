import { HttpClient } from '@angular/common/http';
import { ProviderAstType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employees';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeeService]
})
export class EmployeesComponent implements OnInit {

  msg: string = "";
  employeeList: Array<Employee> = [];

  constructor(private _httpClient: HttpClient, private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.msg = this._employeeService.message;
    this._employeeService.getAllEmployees().subscribe(result => {
      this.employeeList = result;
    }, (error) => { console.log(error);})
  }

}
