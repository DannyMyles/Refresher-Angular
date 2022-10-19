import { Component, OnInit } from '@angular/core';
//IMporting the router module for navifation
import { Router } from '@angular/router';
@Component({
  selector: 'app-deplist',
  templateUrl: './deplist.component.html',
  styleUrls: ['./deplist.component.css']
})
export class DeplistComponent implements OnInit {

  departments =[
    
    {"id": "1","name": "Angular"},
    {"id": "2","name": "Nodes"},
    {"id": "3","name": "Python"},
    {"id": "4","name": "JavaScript"},
    {"id": "5","name": "TypeScript"},  
]
//injecting router for navigation
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSelect(department: any){
    this.router.navigate(['/departments', department.id]);
  }

}
