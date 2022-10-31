import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movies } from './movies';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(private http:HttpClient) { }
  getdata():Observable<Movies[]>{
    return this.http.get<Movies[]>('http://localhost:4200/assets/data/row2.json')
  }
}
