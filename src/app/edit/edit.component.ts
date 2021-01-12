import { Productdata } from './../productdata';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl,FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
code="";

img="";
data=Productdata.products;
details:any;
form: FormGroup;
items: FormArray;
hide="";
new="";
  constructor(private auth:AuthService,private route:ActivatedRoute,private router:Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
    console.log(this.router.url);
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.route.paramMap.subscribe(params=>{
      this.code = params.get("id");
       this.details = this.data.find(n=>{
         if(n.id==this.code) return true;
       });
       });
  
     this.form=this.formBuilder.group({
       name: new FormControl("",[Validators.required, Validators.maxLength(100)]),
        desc: new FormControl("",[Validators.required]),
        imgurl: new FormControl("",[Validators.required, Validators.pattern(reg)]),
        items: this.formBuilder.array([])
      });
   
      if(this.code){
      this.items = this.form.get("items") as FormArray;
      this.details.ingredients.forEach(_ => this.items.push(this.createItem()));
      this.form.patchValue({
        items:this.details.ingredients
      });
       this.form.patchValue({
           name:this.details.title,
             desc:this.details.desc,
           imgurl:this.details.img,
           
          });
         
        }
  }

 createItem(): FormGroup{
  return this.formBuilder.group({
    ingName: new FormControl("",RxwebValidators.unique()),
    qty: new FormControl("",[Validators.required, Validators.min(0.1)])
  });
}
 addItem(){
   this.items=this.form.get("items") as FormArray;
  this.items.push(this.createItem());

}

 deleteRow(i){
  this.items.removeAt(i);
 }
 get desc(){ return this.form.get("desc");
  }
 get name(){ return this.form.get("name");}
 get imgurl(){ return this.form.get("imgurl");}
onSubmit(str){
  console.log(str);
  if(str==="save"){
    var name=this.form.get("name").value;
    var desc=this.form.get("desc").value;
    this.img=this.form.get("imgurl").value;
    var items=this.form.get("items").value;
    let path="";
    if(this.code){
      this.data.find(n=>{
        if(n.id===this.code){
          n.id=this.code,
          n.desc=desc,
          n.img=this.img,
          n.ingredients=items,
          n.title=name
          return true;
        }
      });
      path="/recipes/"+this.code;
      this.router.navigate([path]);
    }
    
    else{
      this.code=name.substring(0,2).toUpperCase()+Math.floor((Math.random() * 9999) + 1000);
      var x={id:this.code,
          desc:desc,
        img:this.img,
        ingredients:items,
        title:name}
      this.data.push(x);
      console.log(this.code);
      path="/recipes/"+this.code;
      this.router.navigate([path]);
    }
   
    }
if(str==="cancel"){
  this.router.navigate(["/recipes"]);
}    
  }

}
