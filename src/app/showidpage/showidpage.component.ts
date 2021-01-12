import { AuthService } from './../auth.service';
import { Productdata } from './../productdata';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-showidpage',
  templateUrl: './showidpage.component.html',
  styleUrls: ['./showidpage.component.css']
})
export class ShowidpageComponent implements OnInit {
  manage=["To Shopping List","Edit Recipe","Delete Recipe"];
  data=Productdata.products;
  constructor(private auth:AuthService,private route:ActivatedRoute,private router:Router) { }
    id="";
item:any;
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = params.get("id");
       if(this.id){
       var arr= this.data.filter(n=>n.id==this.id);
        this.item=arr[0];
       
       }
      });
  }
  showPage(i){
    let path ="";
   if(this.manage[i]=="To Shopping List"){
    this.auth.cartData.push(this.item);
    this.auth.cartData.map(n=>{if(n.count===undefined)n.count=1 });
      path="shopping-list";
      this.router.navigate([path]);
   }
   if(this.manage[i]=="Edit Recipe"){
    path="edit";
    this.router.navigate([path],{relativeTo:this.route });
    console.log(this.route);
   }
   if(this.manage[i]=="Delete Recipe"){
    var x=this.data.indexOf(this.auth.item);
    this.data.splice(x,1);
     path="recipes";
     this.router.navigate([path]);
   }
  }
}
