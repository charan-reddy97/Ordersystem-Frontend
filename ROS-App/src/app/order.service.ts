import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserUrl } from './common/constant';
import { Order } from './models/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
httpClient:any;
  constructor(private httpclient:HttpClient) { }


  fetchOrder(): Observable<Array<Order>>
  {
    let Order=this.httpclient.get<Array<Order>>(UserUrl+"/api/order");
    Order.subscribe();
    return Order;
  }
}
