import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./users";


@Injectable()
export class UserService {

    constructor(private _httpClient: HttpClient) { }

    registerUser(user: User): Observable<User> {
       return this._httpClient.post<User>('http://localhost:3000/User', user);
    }
}
