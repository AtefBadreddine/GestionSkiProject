import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Abonnement, TypeAbonnement, TypeAbonnementValues } from 'src/app/models/abonnement';
import { AbonnementService } from 'src/app/services/abonnement.service';



@Component({
  selector: 'app-abonnement-create.ts',
  templateUrl: './abonnement-create.component.html',
  styleUrls: ['./abonnement-create.component.scss']
})
export class AbonnementCreateComponent {

 abonnementForm: FormGroup;
 typeAbonnementValues = TypeAbonnementValues;
 constructor(private formBuilder :FormBuilder , private abonnementService : AbonnementService,
  private router: Router) {
}
  ngOnInit() {
    // Initialisation du formulaire réactif avec des champs et des validateurs
    this.abonnementForm = this.formBuilder.group({
      dateDebut: ["", [Validators.required]],
      dateFin: ["", [Validators.required]],
      prixAbon: ["", [Validators.required]],
      typeAbonnement: [TypeAbonnement.ANNUEL, [Validators.required]]
    });
  }
    // Function called on form submission
    addAbonnement() {
      if (this.abonnementForm.valid) {
        let a :  Abonnement = this.abonnementForm.value;
  
        this.abonnementService.addAbonnement(a).subscribe(
          (response) => {
            if (response) {
              this.router.navigate(['abonnements']);
            } else {
              console.error('Unexpected response status:');
            }
          },
          (error) => {
            console.error('Error adding abonnement:', error);
          }
        );
      }
    }
    get numAbon(){
      return this.abonnementForm.get('numAbon');
    }
    get dateDebut(){
      return this.abonnementForm.get('dateDebut');
    }
    get dateFin(){
      return this.abonnementForm.get('dateFin');
    }
    get prixAbon(){
      return this.abonnementForm.get('prixAbon');
    } 
    get typeAbonnement(){
      return this.abonnementForm.get('typeAbonnement');
    }
    
    
    



}
