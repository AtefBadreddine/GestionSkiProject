import { Component } from '@angular/core';
import {Service} from "../../../services/moniteur.service";
import {Cours} from "../../../models/cours";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'list-component',
  templateUrl: './list_cours.component.html',
  styleUrls: ['./list_cours.component.scss']
})
export class ListCoursComponent {

  listCours : Cours[] = [] ;
  moniteur_id : string | null = null;

  constructor(private service : Service, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.moniteur_id = params['id'] || null; // Extract 'id' query param or set to null if not present
      // You can perform further operations with the retrieved ID here
    });
    this.service.getCours(this.moniteur_id).subscribe(
      (res: Cours[]) => {
        console.log(res);
        this.listCours = res;
      },
      (error) => {
        console.error('Error fetching moniteurs:', error);
      }
    );
  }


  handleNotify(cours : number){
    console.log("sssss" + cours);
    this.service.notify_skieur(this.moniteur_id, cours.toString()).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
