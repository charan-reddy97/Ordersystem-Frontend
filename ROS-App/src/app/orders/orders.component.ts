import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:Array<Order>=[]
  constructor(private orderservice:OrderService) { }
 
  ngOnInit(): void {
    this.orderservice.fetchOrder().subscribe(d=>this.orders=d);
  }

}


