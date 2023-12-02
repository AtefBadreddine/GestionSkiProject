import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {Skieur} from "../models/skieur";
@Injectable({
  providedIn: 'root'
})
export class SkieurService {

  baseUrl : string = "http://localhost:8089/skieur/" ;
  constructor(private _http:HttpClient) { }


  getSkieur(id:String):Observable<Skieur>{

    return this._http.get<Skieur>(this.baseUrl+"get/"+id);
  }
  getAllSkieurs(): Observable<Skieur[]> {
    return this._http.get<Skieur[]>(this.baseUrl + 'getall');
  }

  addSkieur(skieur : Skieur): Observable<Skieur> {
    return this._http.post<Skieur>(this.baseUrl+"add",skieur);
  }

  updateSkieur(skieur : Skieur): Observable<Skieur> {
    return this._http.put<Skieur>(this.baseUrl+"update",skieur);
  }

  deleteSkieur(numSkieur : number): Observable<any> {
    return this._http.delete<any>(this.baseUrl+"delete/"+numSkieur,   { observe: 'response' });
  }

}

