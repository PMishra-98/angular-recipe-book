import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService:AuthService,private router:Router, private route:ActivatedRoute, private changeDetector:ChangeDetectorRef){}
  navlinks1:{link:string,active:string,txt:string}[];
  navlinks2:{link:string,active:string,txt:string}[];
  
  ngOnInit(){
    this.authService.loginStatusObs$.subscribe(
      status=>{
        this.updateNavBar();
      }
    )
    this.updateNavBar();
  }
  updateNavBar(){
    var register ={link:'/register',active:'active',txt:'register'};
    var login ={link:'/sign-in',active:'active',txt:'Sign In'};
    var logout ={link:'/sign-out',active:'active',txt:'Sign Out'};
    if(this.authService.loginStaus){
    
       this.navlinks1=[logout];
       this.changeDetector.detectChanges();
       console.log(this.navlinks1);
      
    }
    else{
      this.navlinks1=[login,register];
      this.changeDetector.detectChanges();
    }
  
    }
  

}
