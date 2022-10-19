import { EmployeeService } from './../../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  public employees:any[] = []
  public errorMessage: any;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    //Using services
    this._employeeService.getEmployees().subscribe(data => this.employees = data,     
                                                    error =>this.errorMessage= error);
  }


}
