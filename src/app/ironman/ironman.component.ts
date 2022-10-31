import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-ironman',
  templateUrl: './ironman.component.html',
  styleUrls: ['./ironman.component.css']
})
export class IronmanComponent implements OnInit {
data:any
  constructor(private notifications:NotificationsService,private http:HttpClient) {
   }

  ngOnInit(): void {
    this.getdata()
  }
getdata(){
  this.http.get('http://localhost:4200/assets/Data/row2.json').subscribe((Movies)=>{
    this.data=Movies
    console.log(this.getdata)
  })
}
}
