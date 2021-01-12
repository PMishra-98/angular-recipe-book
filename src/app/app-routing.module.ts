import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './authguard.guard';
import { RecipeComponent } from './recipe/recipe.component';
import { EditComponent } from './edit/edit.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowidpageComponent } from './showidpage/showidpage.component';

const routes: Routes = [
 
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'recipes',
    component:RecipeComponent,
    canActivate:[AuthguardGuard],
    children:[
      
      {
        path:'new',
        component:EditComponent
      },
      {
        path:':id/edit',
        component:EditComponent
      },
      {
        path:':id',
        component:ShowidpageComponent
      },
      {
        path:'',
        component:ShowidpageComponent
      },
    ]
  },
  {
    path:'shopping-list',
    component:CartComponent
  },
  
  {
    path:'sign-in',
    component:LoginComponent
  },
  {
    path:'register',
    component:LoginComponent
  },
  {
    path:'sign-out',
    component:LogoutComponent
  },
  {
    path:'cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
