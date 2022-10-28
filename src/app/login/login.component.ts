import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
document:any
  constructor(@Inject(DOCUMENT) document:Document,private router:Router) { 
    this.document=document;
  }

  ngOnInit(): void {
  }
 login1(){
  if(this.document.getElementById('name').value=='vamsi'&&this.document.getElementById('password').value=='12345'){
   alert('Hello Vamsi')
   //this.router.navigate(['/app'])
}else{
  //   alert('You Need To Login')
}}
  }


