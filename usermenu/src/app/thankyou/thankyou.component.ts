import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor(public dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
  }
  close(){
    localStorage.clear();
    this.router.navigate(['usermenu'])
    this.dialog.closeAll();


  }

}
