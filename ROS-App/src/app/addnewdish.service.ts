import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './common/constant';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { NewDish } from './models/addnewdish';

@Injectable({
  providedIn: 'root'
})
export class AddnewdishService {

  constructor(private http:HttpClient) { }
  createNewDish(dish_Name:string,price:number, description:string,coverImage:string) : Observable<NewDish>{

    return this.http.post<NewDish>(baseUrl + "/api/menu",{ dish_Name, price,description,coverImage});
  }
}
