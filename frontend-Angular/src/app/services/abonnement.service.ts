import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abonnement } from '../models/abonnement';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {
  baseUrl : string = "http://localhost:8089/Abonnement/" ;

  constructor(private _http:HttpClient) { }

  getAbonnement(id:String):Observable<Abonnement>{

    return this._http.get<Abonnement>(this.baseUrl+"get/"+id);
  }
  getAllAbonnement(): Observable<Abonnement[]> {
    return this._http.get<Abonnement[]>(this.baseUrl + 'getAll');
  }
  addAbonnement(abonnement : Abonnement): Observable<Abonnement> {
    return this._http.post<Abonnement>(this.baseUrl+"addAbonnement",abonnement);
  }
  updateAbonnement(abonnement : Abonnement): Observable<Abonnement> {
    return this._http.put<Abonnement>(this.baseUrl+"updateAbonnement" ,abonnement);
  }
  deleteAbonnement(numAbon : number): Observable<any> {
    return this._http.delete<any>(this.baseUrl+"delete/"+numAbon,   { observe: 'response' });
  }


}
