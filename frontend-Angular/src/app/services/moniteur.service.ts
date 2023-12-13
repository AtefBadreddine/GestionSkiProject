import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {Moniteur} from "../models/moniteur";
import { Cours } from "../models/cours";
@Injectable({
  providedIn: 'root'
})
export class Service {

  baseUrl : string = "http://localhost:8089/moniteur/" ;
  constructor(private _http:HttpClient) { }


  get(id:String):Observable<Moniteur>{

    return this._http.get<Moniteur>(this.baseUrl+"get/"+id);
  }
  getAll(): Observable<Moniteur[]> {
    return this._http.get<Moniteur[]>(this.baseUrl + 'getall');
  }
  getCours(id : String): Observable<Cours[]>{
    return this._http.get<Cours[]>(this.baseUrl + "get_cours?id=" + id)
  }

  add(moniteur : Moniteur): Observable<Moniteur> {
    return this._http.post<Moniteur>(this.baseUrl+"add",moniteur);
  }

  update(moniteur : Moniteur): Observable<Moniteur> {
    return this._http.put<Moniteur>(this.baseUrl+"update",moniteur);
  }

  remove(numMoniteur : number): Observable<any> {
    return this._http.delete<any>(this.baseUrl+"delete/"+numMoniteur,   { observe: 'response' });
  }

  notify_skieur(id : String, cours_id: String){
    return this._http.get<any>(this.baseUrl+"notify?id=1&cours_id="+cours_id,   { observe: 'response' });
  }

}

