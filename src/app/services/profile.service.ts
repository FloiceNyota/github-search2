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
  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  updateProfile(username:string){
  	this.username = username;
  }

}


}
