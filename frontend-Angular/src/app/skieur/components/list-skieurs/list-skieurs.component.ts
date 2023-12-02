import { Component } from '@angular/core';
import {SkieurService} from "../../../services/skieur.service";
import {Skieur} from "../../../models/skieur";

@Component({
  selector: 'app-list-skieurs',
  templateUrl: './list-skieurs.component.html',
  styleUrls: ['./list-skieurs.component.scss']
})
export class ListSkieursComponent {

  listSkieurs : Skieur[] = [] ;
  constructor(private skieurService:SkieurService) {
  }

  ngOnInit() {
    this.skieurService.getAllSkieurs().subscribe(
      (res: Skieur[]) => {
        this.listSkieurs = res;
      },
      (error) => {
        console.error('Error fetching skieurs:', error);
      }
    );
  }

  deleteS(id : number) {
      this.skieurService.deleteSkieur(id).subscribe(
        (res) => {
              if (res.status === 200)
              this.listSkieurs = this.listSkieurs.filter(skieur => skieur.numSkieur !== id);

        }
      )
  }


}
