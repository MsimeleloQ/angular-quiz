import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Models/employees';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
  providers: [EmployeeService]
})
export class EmployeeUpdateComponent implements OnInit {

  id: any;

  employee: Employee = new Employee();

  constructor(private _activatedRoute: ActivatedRoute,  private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._employeeService.getEmployeeById(this.id).subscribe(result => {
    console.log(result);
    }, (error) => {console.log(error);})
  }

  updateEmployee() {
    this._employeeService.updateExistingEmployee(this.employee).subscribe(result => {
      alert('Employee Updated successfully');
      this._router.navigate(['/employees']);
    }, (error) => { console.log(error); })
  }


}
