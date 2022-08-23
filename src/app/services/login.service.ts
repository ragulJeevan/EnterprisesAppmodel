import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService { 
  constructor() { }
  isUserlogged(){
    const userName = localStorage.getItem("users");
    if(!userName==null){
      return true;
    }
    else{
      return false;
    }
  }
  isLoggedin(){
    const userName = localStorage.getItem("userName");
    if(userName=="Ragul"){
      return true;
    }
    else{
      return false;
    }
  }
}
