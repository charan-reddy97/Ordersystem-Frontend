import { Component, OnInit } from '@angular/core';
import { AddnewdishService } from '../addnewdish.service';
import { NewDish } from '../models/addnewdish';

@Component({
  selector: 'app-addnewdish',
  templateUrl: './addnewdish.component.html',
  styleUrls: ['./addnewdish.component.css']
})
export class AddnewdishComponent implements OnInit {
  dish_Name: string="";
    price: number=0;
    description:  string="";
    coverImage:string="";
  constructor(private addnewdishservice: AddnewdishService) { }

  ngOnInit(): void {
  }

 createNewDish(){
  this.addnewdishservice.createNewDish(this.dish_Name,this.price,this.description,this.coverImage)
  .subscribe((createNewDish:NewDish)=>{
 
  this.dish_Name='';
  this.price=0;
  this.description='';
  this.coverImage='';
 })


}
}
