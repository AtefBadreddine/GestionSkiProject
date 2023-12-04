import { Component } from '@angular/core';
import {Service} from "../../../services/moniteur.service";
import {Moniteur} from "../../../models/moniteur";

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  listAll : Moniteur[] = [] ;
  constructor(private service : Service) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      (res: Moniteur[]) => {
        this.listAll = res;
      },
      (error) => {
        console.error('Error fetching moniteurs:', error);
      }
    );
  }

  remove(id : number) {
      this.service.remove(id).subscribe(
        (res) => {
              if (res.status === 200)
              this.listAll = this.listAll.filter(moniteur => moniteur.numMoniteur !== id);

        }
      )
  }


}
