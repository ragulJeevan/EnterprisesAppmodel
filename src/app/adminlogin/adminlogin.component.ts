import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminForm:FormGroup|any;
  adminName:any;

  constructor() {}
  ngOnInit(): void {
    this.adminForm= new FormGroup(
      { 'name': new FormControl("",[Validators.required]),
        'emailId': new FormControl("",[Validators.required,Validators.email]),
      'passCode': new FormControl("", [Validators.required,Validators.min(5)])}
    )
    }
    adminLogin(){
      console.log(this.adminForm.value);
      
    }
    

}
