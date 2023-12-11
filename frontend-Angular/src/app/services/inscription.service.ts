import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  baseUrl : string = "http://localhost:8089/inscription" ;
  constructor(private _http:HttpClient) { }


  findAll():Observable<any[]>{

    return this._http.get<any[]>(this.baseUrl+"/getall");
  }
  deleteById(numInscription) 
  {
    return this._http.delete(this.baseUrl+"/deleteInscription/"+numInscription)
  }
  addInscriptionAndAssignToSkierAndCours(inscription:any,numCours:any,numSkieurs:any)
  {
    return this._http.post(this.baseUrl+"/addInscription/assignToCoursAndSkieur/"+numCours+"/"+numSkieurs,inscription)
  }
}