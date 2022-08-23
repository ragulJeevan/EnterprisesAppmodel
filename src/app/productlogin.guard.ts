import { ElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductloginGuard implements CanActivate {
  constructor(private login:LoginService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.login.isLoggedin()){
        return true;
      }else{
        this.route.navigate(['admin'])
        return false;
      }

        // if(this.login.isUserlogged()){
        //   return true;
        // }
        // else{
        //   this.route.navigate(['login'])
        //   return false;
        // }

       
  }
  
}
