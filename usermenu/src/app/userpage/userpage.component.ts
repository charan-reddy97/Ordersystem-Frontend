import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
 
import { Dish } from '../models/dish';
import { PlaceorderService } from '../placeorder.service';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  dishes:Array<Dish> = []
  constructor(private userService:UserService, private cartService:CartService,private placeorderservice:PlaceorderService) { }

  ngOnInit(): void {
   this.userService.fetchdish().subscribe(d => this.dishes = d);
   
  }
 addtoCart(dish:Dish):void{
  this.cartService.addToLocal(dish);
  this.placeorderservice.res=true;
 }
}