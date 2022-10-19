import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { EnrollmentService } from 'src/app/enrollment.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  topics = ["Java Programming", "Web Programming", "Data Science", "Andriod"];
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  userForm :any;
  error:any;
  //Create an instanceof a user
  userModel = new User('','', 1157565720,'default','morning',false);

  
  
//Select the topic validator
  validateTopic(value: string){
    if(value === 'default'){
      this.topicHasError = true;
  }else{
      this.topicHasError = false;
  }
}
  
  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }



// Handling submisson of the Form
  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
                                .subscribe(data => console.log('Successfully submitted!',data),
                                error => this.errorMsg= error.statusText
                                )
  }

}
