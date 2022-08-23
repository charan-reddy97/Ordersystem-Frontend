import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { MenuService } from '../menu.service';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  id:number =0;
  dish_Name:string="";
  price:number=0;
  description: string="";
  coverImage:string="";
  
  menus:Array<Menu> = []

  constructor(private menuservices:MenuService,private route:Router) { }

  ngOnInit(): void {
    this.menuservices.fetchmenu().subscribe(d => this.menus = d);
  }
  onDelete(Id:number){
    this.menuservices.deleteMenu(Id).pipe(
      mergeMap(() => this.menuservices.fetchmenu())
     )
     .subscribe((menus:Menu[])=>{
       this.menus=menus;
     })
    
  }


}