import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  baseUrl : string = "http://localhost:8089/cours" ;
  constructor(private _http:HttpClient) { }


  findAll():Observable<any[]>{

    return this._http.get<any[]>(this.baseUrl+"/getall");
  }
}
