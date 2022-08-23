import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { CartService } from '../cart.service';
import { Dish } from '../models/dish';
import { PlaceorderService } from '../placeorder.service';
import { ThankyouComponent } from '../thankyou/thankyou.component';
import { UserService } from '../user.service';
import { UserpageComponent } from '../userpage/userpage.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  showpc:boolean=false;
  showdel:boolean=false;
  showmsg:boolean=true;
  dishes:Array<Dish> = [];
  res:any=null;
  

  
constructor(private cartService:CartService , private placeorderservice:PlaceorderService,
    private userservie:UserService,public dialog:MatDialog,private router:Router)  { }
  

  ngOnInit(): void {
    this.dishes = this.cartService.getCartItems();
    if(this.placeorderservice.res==true){
      this.showpc=true;
      this.showdel=true;
      this.showmsg=false;
  
    }
  }
  placeorder():void
  {
    console.debug(this.dishes);
    this.placeorderservice.placeorder(this.dishes);
    this.res=this.placeorderservice.res;
    let dialogRef = this.dialog.open(ThankyouComponent, {
      height: '300px',
      width: '400px',
    });
  
  }
  deleteName() {
    localStorage.clear();
  }

    
  }

