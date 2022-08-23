import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './common/constant';
import {Dish } from './models/dish';
 

@Injectable({
  providedIn: 'root'
})
export class CartService {
   addToLocal(dish: Dish) : void {
    let cartItems = this.getCartItems();
    cartItems.push(dish);
    localStorage.setItem("cart",JSON.stringify(cartItems));
  
  }

  getCartItems() : Array<Dish>
  {
    let  cartItems = new Array<Dish>();

    if(localStorage.getItem("cart"))
    {
        var localata = localStorage.getItem("cart")?.toString();

        if(localata)
          cartItems = JSON.parse(localata);
    }

    return cartItems;
  }
  constructor(private httpClient:HttpClient){}
getmenu():boolean
  {
    let request=this.httpClient.get<Dish>(baseUrl+'/api/usermenu',{
    
    });
    request.subscribe(d=>{localStorage.setItem("Dish",JSON.stringify(d));
    return true;
  });
   return false;
   
  }
  getdish() : Dish|undefined
  {
      let dish:Dish|undefined;

      let dishString = localStorage.getItem("Dish")?.toString();
      if(dishString)
       dish = JSON.parse(dishString);

      return dish ;

  }  
 
}