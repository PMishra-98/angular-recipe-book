import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginStaus:boolean=false;
item:any;
cartData:any=[];
role:string=null;
constructor(private http:HttpClient) { }
private loginStatusObs =new Subject<boolean>();
 loginStatusObs$ = this.loginStatusObs.asObservable();
  login(){
    this.loginStaus=true;
    this.loginStatusObs.next(this.loginStaus);
  }
  logout(){
    this.loginStaus=false;
    this.loginStatusObs.next(this.loginStaus);
  }
}
