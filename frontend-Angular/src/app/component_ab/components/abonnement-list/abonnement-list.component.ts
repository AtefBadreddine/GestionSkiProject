import { Component } from '@angular/core';
import { Abonnement } from 'src/app/models/abonnement';
import { AbonnementService } from 'src/app/services/abonnement.service';

@Component({
  selector: 'app-abonnement-list',
  templateUrl: './abonnement-list.component.html',
  styleUrls: ['./abonnement-list.component.scss']
})
export class AbonnementListComponent {
  listAbonnement : Abonnement[] = [];
  constructor(private abonnementService : AbonnementService){

  }
  ngOnInit() {
    this.abonnementService.getAllAbonnement().subscribe(
      (res: Abonnement[]) => {
        this.listAbonnement = res;
      },
      (error) => {
        console.error('Error fetching abonnement:', error);
      }
    );
  }
  deleteAbonnement(id : number) {
    this.abonnementService.deleteAbonnement(id).subscribe(
      (res) => {
            if (res.status === 200)
            this.listAbonnement = this.listAbonnement.filter(abonnement => abonnement.numAbon !== id);

      }
    )
}
}
