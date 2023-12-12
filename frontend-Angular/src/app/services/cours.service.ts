import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cours } from '../models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  baseUrl: string = "http://localhost:8089/cours/";

  constructor(private _http: HttpClient) { }

  getCours(id: string): Observable<Cours> {
    return this._http.get<Cours>(this.baseUrl + "get/" + id);
  }

  getAllCours(): Observable<Cours[]> {
    return this._http.get<Cours[]>(this.baseUrl + 'getall');
  }

  addCours(cours: Cours): Observable<Cours> {
    return this._http.post<Cours>(this.baseUrl + "add", cours);
  }

  updateCours(cours: Cours): Observable<Cours> {
    return this._http.put<Cours>(this.baseUrl + "update", cours);
  }

  deleteCours(numCours: number): Observable<any> {
    return this._http.delete<any>(this.baseUrl + "delete/" + numCours);
  }
}
