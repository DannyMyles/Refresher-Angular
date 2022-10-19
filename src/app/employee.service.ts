import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url : string ="/assets/Data/employee.json"

  constructor(private http:HttpClient) { }

  getEmployees() :Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(
      retry(1),
      catchError(this.handleError)
    ) ;
}

//Error handling function. 
//import { Observable, throwError } from 'rxjs';
//import { retry, catchError } from 'rxjs/operators'; imported the following


  handleError(error: { error: { message: any; }; status: any; }){
    let errorMessage ='';
    if (error.error instanceof ErrorEvent) {
      //client-side error
      errorMessage = `Error: ${error.error.message}`;
  }else{
    errorMessage = `Error Code: ${error.status}\nmessage: ${error.error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);

  }
}
