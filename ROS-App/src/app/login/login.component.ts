import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'; @Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  

 email:string='';
 password:string='';
 constructor(private loginService:LoginService,private route:Router) { }
 ngOnInit() {
    
}
loginClick():void{
   
 this.loginService.login(this.email,this.password);
 this.route.navigateByUrl("/home")
}
}