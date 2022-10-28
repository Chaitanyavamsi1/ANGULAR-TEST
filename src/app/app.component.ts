import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  document:any
  constructor(@Inject(DOCUMENT) document:Document,private router:Router) { 
    this.document=document;}

  title = 'wrestling';
  but(){
    if(this.document.getElementById('test1').value=="IRONMAN" ||this.document.getElementById('test1').value=="ironman" ){
      this.router.navigate(['/ironman'])}
      else if(this.document.getElementById('test1').value=="CAPTAIN" ||this.document.getElementById('test1').value=="captain"){
        this.router.navigate(['/captain'])
       
}
}
}
