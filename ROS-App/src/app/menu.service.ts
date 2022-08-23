import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './common/constant';
import { LoginService } from './login.service';
import {Menu} from './models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient,private loginService:LoginService) { }
  fetchmenu() : Observable<Array<Menu>>
  {
       let header = {
             "Authorization" : " Bearer " + this.loginService.getToken()?.token
       }
       let Menu = this.http.get<Array<Menu>>(baseUrl + "/api/menu",{headers : header});
       Menu.subscribe();

       return Menu;
}
deleteMenu(Id:number):Observable<any>{
  return this.http.delete(baseUrl + "/api/menu/" + Id);
}

}