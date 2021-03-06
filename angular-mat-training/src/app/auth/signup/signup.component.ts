import { AuthData } from './../../_interfaces/aut-data.model';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      date: new FormControl(new Date()),
      terms: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.signupForm.controls[controlName].hasError(errorName);
  }

  public checkChanged = (event) =>{
    if(!event.checked){
      this.signupForm.patchValue({'terms': ''});
    }
  } 

  public submitForm = (signupFormValue) =>{
    let userData: AuthData = {
      email: signupFormValue.email,
      password: signupFormValue.password
    };

    this.authService.registerUser(userData);
  }

}
