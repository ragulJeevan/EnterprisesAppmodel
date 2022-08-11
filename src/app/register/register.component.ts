import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup|any;

  constructor() { }

  ngOnInit(): void {
    this.registerForm= new FormGroup(
      {'fname': new FormControl("",Validators.required),
      'lname': new FormControl("",Validators.required),
      'street': new FormControl("",Validators.required),
      'city': new FormControl("",Validators.required),
      'district': new FormControl("",Validators.required),
      'state': new FormControl("",Validators.required),
      'dateObirth': new FormControl("",Validators.required),
      'gender': new FormControl("",Validators.required),
      'mobileNumber': new FormControl("",Validators.required),
      'eMail': new FormControl("",Validators.required),
      'passCode1': new FormControl("",Validators.required),
      'passCode2': new FormControl("",Validators.required),
      'terms': new FormControl("",Validators.required),
         }
    )
  }

}
