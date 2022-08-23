import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from './models/dish';
import { baseUrl } from './common/constant';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpClient: any;

  constructor(private http:HttpClient) { }

  fetchdish() : Observable<Array<Dish>>
  {
    let Dish = this.http.get<Array<Dish>>(baseUrl + "/api/usermenu");
   Dish.subscribe();

    return Dish;
}
deleteDish(Id:number):Observable<any>{
  return this.http.delete(baseUrl + "/api/cart/" + Id);

}

}