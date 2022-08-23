import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminForm:FormGroup|any;
  adminName:any;
  showSpinner=false;

  constructor(private router:Router) {}
  ngOnInit(): void {
    this.adminForm= new FormGroup(
      { 'userName': new FormControl("",[Validators.required]),
        'emailId': new FormControl("",[Validators.required,Validators.email]),
      'passCode': new FormControl("", [Validators.required,Validators.min(5)])}
     ) 
  }
    adminLogin(userName:any){
      localStorage.setItem("userName",userName);
      console.log(this.adminForm.value);
      this.router.navigate(['/product']);
    } 
}
