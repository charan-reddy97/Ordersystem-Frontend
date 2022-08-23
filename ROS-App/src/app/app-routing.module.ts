import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewdishComponent } from './addnewdish/addnewdish.component';
import { AppComponent } from './app.component';
import { AuthguardGuard } from './authguard.guard';
import { HomepageComponent } from './homepage/homepage.component';
import{LoginComponent} from './login/login.component';
import { MenupageComponent } from './menupage/menupage.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  
  {path:"menupage", component : MenupageComponent  },
  {path:"order" , component : OrdersComponent},
  {path:"home",component : HomepageComponent},
  {path:"", component : LoginComponent },

  {path:"addnewdish",component:AddnewdishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }