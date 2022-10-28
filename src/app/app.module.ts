import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IronmanComponent } from './ironman/ironman.component';
import { CaptainComponent } from './captain/captain.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IronmanComponent,
    CaptainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
