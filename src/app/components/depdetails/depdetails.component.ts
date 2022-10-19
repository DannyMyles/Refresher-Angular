import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';

@Component({
  selector: 'app-depdetails',
  templateUrl: './depdetails.component.html',
  styleUrls: ['./depdetails.component.css']
})
export class DepdetailsComponent implements OnInit {

  public departmentId!: number;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params:ParamMap) => { 
      // let id = parseInt(params.get('id'));
      // this.departmentId = id;
    });
  }

  goPrevious(){
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments/' + previousId]);
  }
  
  goNext(){
    let nextId = this.departmentId +1;
    this.router.navigate(['/departments/' + nextId]);
  }

}
