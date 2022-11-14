import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rest = 'v1/authorization';
  rest_check = 'authorization-check';
  token = null;
  in_progress = false;
  autoAthenticated  = false;
  tokenCheckInProgress = false;
  apiURL = environment.gems_url + this.rest;

  constructor() {}

  public getToken(email:string, password:string) {
    console.log('apiUrl', this.apiURL);

    // Prevent concurrent calls to authenticate (based on multiple 401s returning)
    if (!this.in_progress) {
      this.in_progress = true;
      // TODO: POST logic
    }
  }
}
