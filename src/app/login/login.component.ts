import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data:AuthService,private route:ActivatedRoute,private router:Router) { }
  simpleForm:FormGroup=null;
 routeUrl="";
 username="";
 returnUrl:string;
 userpass="";
  getDetials:any=[];
  loginFail:boolean=false;
ngOnInit(){

 this.routeUrl=this.router.url;
 console.log(this.routeUrl);
 this.returnUrl=this.route.snapshot.queryParams['returnUrl']||'/';
  this.createForm();
}
createForm(){
  this.simpleForm=new FormGroup({
   'email':new FormControl('',[Validators.required ]),
    'pass':new FormControl('',[
      Validators.required
    ]),
  });
}
get email(){ return this.simpleForm.get('email');}
get pass(){ return this.simpleForm.get('pass');}

onSubmit(){
  var pass1 = this.simpleForm.get('pass').value;
  var email1 = this.simpleForm.get('email').value;

  if(this.routeUrl=="/register"){
    localStorage.setItem('username', email1);
    localStorage.setItem('userpass', pass1);
   
    alert("Register Successfully")
    this.router.navigate(["/sign-in"]);
  }
  if(this.routeUrl=="/sign-in"){
    this.username=localStorage.getItem("username");
    this.userpass=localStorage.getItem("userpass");
    
    if(pass1===this.userpass&&email1===this.username){
      this.data.login();
      this.router.navigate([this.returnUrl]);
     
    }
     else{
       alert("User name and Password not exist")
      return false;
     }

  }
}
}
