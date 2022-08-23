import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup|any;
  name:string="";
  showSpinner=false;
  constructor(private lgservice:LoginService,private router:Router) {
  }
  ngOnInit(): void {
    this.loginForm= new FormGroup(
      { 'name': new FormControl("",[Validators.required]),
        'emailId': new FormControl("",[Validators.required,Validators.email]),
      'passCode': new FormControl("", [Validators.required,Validators.minLength(8)])}
    )
    
  }
  login(user:any){
    localStorage.setItem("users",user);
        this.router.navigate(['/home'])
        this.showSpinner=true;
      setTimeout(() => {
        this.showSpinner=false;
      }, 3000);
  }


  
    
}
