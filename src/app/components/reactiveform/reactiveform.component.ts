import { RegistrationService } from './../../registration.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormArray } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/password-validator';
import { forbidenNameValidator } from 'src/app/shared/user-name-validator';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent implements OnInit {

  registrationForm!: FormGroup;

  get userName(){
    return this.registrationForm.get('userName');
  }
  get email(){
    return this.registrationForm.get('email');
  }

  //Form Array for alternative inputs
  get alternateEmails(){
    return this.registrationForm.get('alternateEmails')as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }



  //Form Array for alternative inputs End

  //Injecting form builders
  constructor(private fb: FormBuilder) { }

  //Using Form Builder
  ngOnInit(): void {
  this.registrationForm = this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3),forbidenNameValidator(/password/)]],
    password:[''],
    email: [],
    subscribe:[false],
    confirmPassword:[''],
    address: this.fb.group({
      city:[''],
      state:[''],
      postalCode:[''],
    }),
    alternateEmail : this.fb.array([])

  },{validator : PasswordValidator});
    this.registrationForm.get('subscribe')?.valueChanges.subscribe(checkedValue =>{
      const email = this.registrationForm.get('email')
      if(checkedValue){
        email?.setValidators(Validators.required)
      }else{
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    });

  }

  
  loadData() {
    this.registrationForm.patchValue({
      userName: "Danny",
      password: 'test',
      confirmPassword: null,
      address: {
        city: '',
        state: '',
        postalCode: ''
      }
    });
  }
  onSubmit() {}
}
