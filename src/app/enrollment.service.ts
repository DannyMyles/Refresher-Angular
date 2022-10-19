import { catchError } from 'rxjs/operators';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

// Posting to the created server
  _url="http://localhost:3000/enroll";
  constructor(private _http: HttpClient) { }

// Handling onSubmit event and Error handling
  enroll(user:User){
    return this._http.post<any>(this._url,user)
    .pipe(catchError(this.errorHandler)) 
    
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}

// To work with a url, I have created an extra folder ouside the project folder called server
// Then ran npm init --yes
// I then installed (npm i --save express body-parser cors)
// Create a new file in the Server folder called server.js
// Enroll.service.ts work hand in hand with about.componet