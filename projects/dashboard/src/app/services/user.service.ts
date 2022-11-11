import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}
  getUser(userId?: number): Observable<User> {
    return of({
      userId: 1,
      firstName: "Michael",
      lastName: "Jackson",
      isAuthenticated: true,
    });
  }
}

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  isAuthenticated: boolean;
}
