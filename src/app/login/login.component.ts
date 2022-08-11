import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup|any;
  constructor(private lgservice:LoginService) {
  }
  ngOnInit(): void {
    this.loginForm= new FormGroup(
      { 'name': new FormControl("",[Validators.required]),
        'emailId': new FormControl("",[Validators.required,Validators.email]),
      'passCode': new FormControl("", [Validators.required,Validators.minLength(8)])}
    )
    
  }
  login(){
   this.loginForm.value;
  }

  
    
}
