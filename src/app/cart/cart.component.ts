import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartData:any;
name="";
amount:Number;
qty;
total=[];

count;
constructor(private data:AuthService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
   this.listShow();
  }
 
clear(){
 
  this.router.navigate(["/"]);
}
add(){
  this.data.cartData.map(n=>n.ingredients.find(obj=>{
    if(obj.ingName==this.name)
       obj.qty =(+obj.qty)+(+this.amount);
  }))
   this.listShow();
 } 
 listShow(){
  var items=[];
  var item=[];
 this.cartData=JSON.parse(JSON.stringify(this.data.cartData));

 this.cartData.map(n=>n.ingredients.map(n1=>n1.qty=n1.qty*n.count));
 var arr1=this.cartData.map(n=>n.ingredients);
 console.log(this.cartData,this.data.cartData);
for(var i=0;i<arr1.length;i++){
  for(var j=0;j<arr1[i].length;j++){
   items.push(arr1[i][j]);
  }
}

var holder = {};
items.forEach(function(d) {
if (holder.hasOwnProperty(d.ingName)) {
 holder[d.ingName] = holder[d.ingName] + d.qty;
} else {
 holder[d.ingName] = d.qty;
}
});

for (var prop in holder) {
item.push({ ingName: prop, qty: holder[prop] });
}
this.total=item;

}
}
