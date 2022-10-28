import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CaptainComponent } from './captain/captain.component';
import { IronmanComponent } from './ironman/ironman.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [{path:'login',component:LoginComponent},{path:'ironman',component:IronmanComponent},{path:'captain',component:CaptainComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
