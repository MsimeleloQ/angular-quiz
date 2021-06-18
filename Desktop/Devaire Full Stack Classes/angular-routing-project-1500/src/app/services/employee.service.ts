import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../Models/employees";

@Injectable()
export class EmployeeService {
    message: string = 'Employee Management System';
    
    constructor( private _httpCLient: HttpClient) { }

    getAllEmployees(): Observable<Employee[]>{
        return this._httpCLient.get<Employee[]>('http://localhost:3000/employees')

    }

    getEmployeeById(id: any): Observable<Employee>{
       return this. _httpCLient.get<Employee>("http://localhost:3000/employees/" + id)
    }

    addNewEmployee(employee: Employee): Observable<Employee>{
       return this._httpCLient.post<Employee>('http://localhost:3000/employees', employee)
    }

    deleteExistingEmployee(id: any): Observable<Employee>{
        return this. _httpCLient.delete<Employee>("http://localhost:3000/employees/" + id)
    }

    updateExistingEmployee(employee: Employee): Observable<Employee>{
       return this._httpCLient.put<Employee>("http://localhost:3000/employees" + employee.id, employee)
    }
}