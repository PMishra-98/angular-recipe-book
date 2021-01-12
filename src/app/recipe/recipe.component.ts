import { AuthService } from './../auth.service';
import { Productdata } from './../productdata';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
data=Productdata.products;
constructor(private auth:AuthService,private route:ActivatedRoute,private router:Router) { }
  id="";
details:any=[];
item:any;
routeUrl="";
  cartData:any=[];
  name="";
  ngOnInit() {
    this.routeUrl=this.router.url;
    console.log(this.routeUrl);
   this.details= this.data;
    this.route.paramMap.subscribe(params=>{
     this.id = params.get("id");
     console.log(this.id);
      if(this.id){
      var arr= this.data.filter(n=>n.id==this.id);
       this.item=arr[0];
       }
     });
    
  }
 
 
  selectItem(i){
    this.id=this.details[i].id;
    this.auth.item=this.details[i];
    let path =this.id;
    this.router.navigate([path],{relativeTo:this.route});
  }
 
}
