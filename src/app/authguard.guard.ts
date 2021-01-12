import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router:Router,private auth:AuthService){}
  canActivate( next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const current=this.auth.loginStaus;
      if(current){
        return true;
      }
   this.router.navigate(['/sign-in']);
   console.log(state.url);
   return false;
  }
}
