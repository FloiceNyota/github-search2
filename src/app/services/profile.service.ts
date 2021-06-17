import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  fromURL: string = "http://api.github.com"
  constructor(private http:HttpClient) { 
  
  }
  

}
