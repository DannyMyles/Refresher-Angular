import { EmployeeService } from './../../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  public employees :any[] = [];
  public errorMessage: any;

  constructor(private _employeeService :EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employees = data,     
                                                    error =>this.errorMessage= error);
  }

}
