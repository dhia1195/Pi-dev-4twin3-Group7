import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="http://localhost:3000/user";
  
  constructor(private _http:HttpClient) {
    _http.request
   }
   inscription(body:any){
    return this._http.post(this.apiUrl,body)
   }
   connexion(email:string,password:string){
    return this._http.get(this.apiUrl+"/connexion/"+email+"/"+password);
   }
  //  getMenuById(id:number){
  //   return this._http.get(this.apiUrl+"/"+id);
  //  }
}
