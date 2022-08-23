import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { FeedbackComponent } from './feedback/feedback.component';

 
import { UserpageComponent } from './userpage/userpage.component';


const routes: Routes = [
  {
    path:"",component:UserpageComponent
  },
  {
    path:"cart",component:CartComponent
  },
  {
    path:"aboutus", component:AboutusComponent
  },
  {path:"feedback",component:FeedbackComponent},

  { path: "delete/:id", component: CartComponent },
  {path:"",redirectTo:'usermenu',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }