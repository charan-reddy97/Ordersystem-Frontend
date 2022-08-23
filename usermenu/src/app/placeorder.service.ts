import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './common/constant';
import { Order } from './models/order';
import { Dish } from './models/dish';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {
  res:boolean=false;
 

  constructor(private http:HttpClient) {}
  
  placeorder(cart:Array<Dish>) : Observable<Order>{
   
    var request = this.http.post<Order>(baseUrl + "/api/order",cart);
    request.subscribe();
    this.res=true;
    return request;

    }
    
  }