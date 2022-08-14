import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService]
})
export class AppComponent implements OnInit {
  title = 'EnterpriseApp';
  titleName:any;

  constructor(private lgservice:LoginService) { }
  ngOnInit(): void{
   
  
  }

 

    
  }

