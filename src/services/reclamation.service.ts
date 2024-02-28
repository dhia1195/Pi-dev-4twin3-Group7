import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: "root",
})
export class ReclamationService {
  [x: string]: any;

  constructor(private _http: HttpClient) {}

  url: string = "http://localhost:3000/reclamation";


  public getAllReclamation() {
    return this._http.get(this.url);
  }

  public addReclamation(reclamation: any) {
    return this._http.post(this.url + "", reclamation);
  }
  public updateReclamation(reclamation: any) {
    return this._http.put(this.url + "", reclamation);
  }

  public deleteReclamation(reclamation: any) {
    console.log(reclamation);
    return this._http.delete(this.url + "", {
      body: reclamation,
    });
  }
  
}