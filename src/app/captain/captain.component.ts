import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-captain',
  templateUrl: './captain.component.html',
  styleUrls: ['./captain.component.css']
})
export class CaptainComponent implements OnInit {

data:any
  constructor(private notifications:NotificationsService,private http:HttpClient) {
   }

  ngOnInit(): void {
    this.getdata()
  }
getdata(){
  this.http.get('http://localhost:4200/assets/Data/row2.json').subscribe((movies)=>{
    this.data=movies
    console.log(this.getdata)
  })
}
}
