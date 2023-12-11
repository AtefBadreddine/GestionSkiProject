import { Component } from '@angular/core';
import { Abonnement } from 'src/app/models/abonnement';
import { AbonnementService } from 'src/app/services/abonnement.service';

@Component({
  selector: 'app-abonnement-list',
  templateUrl: './abonnement-list.component.html',
  styleUrls: ['./abonnement-list.component.scss']
})
export class AbonnementListComponent {
  numAbon: number = 0;
  message: string = '';
  listAbonnement : Abonnement[] = [];
  pourcentageParType: Object[] = [];
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
    this.loadPourcentageParTypeAbonnement();
  }
  deleteAbonnement(id : number) {
    this.abonnementService.deleteAbonnement(id).subscribe(
      (res) => {
            if (res.status === 200)
            this.listAbonnement = this.listAbonnement.filter(abonnement => abonnement.numAbon !== id);

      }
    )
}
calculerJoursRestants(numAbon: number): void {
  this.abonnementService.calculerJoursRestants(numAbon)
    .subscribe(
      (response) => {
        this.message = `${response.body}`;
      },
      (error) => {
        console.error('Erreur lors de l\'appel du service:', error);
        this.message = 'Erreur lors du calcul des jours restants.';
      }
    );
}

loadPourcentageParTypeAbonnement(): void {
  this.abonnementService.getPourcentageParTypeAbonnement()
    .subscribe(
      (response) => {
        this.pourcentageParType = response;
      },
      (error) => {
        console.error('Erreur lors de l\'appel du service:', error);
        // Gérer l'erreur selon vos besoins
      }
    );
}

}
