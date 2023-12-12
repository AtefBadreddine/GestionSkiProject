import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Abonnement, TypeAbonnement, TypeAbonnementValues } from 'src/app/models/abonnement';
import { AbonnementService } from 'src/app/services/abonnement.service';

@Component({
  selector: 'app-update-abonnement.ts',
  templateUrl: './update-abonnement.component.html',
  styleUrls: ['./update-abonnement.component.scss']
})
export class UpdateAbonnementComponent {
  abonnementForm: FormGroup;
  typeAbonnementValues = TypeAbonnementValues;
  abonnement : Abonnement;
  id : string;
  constructor(private formBuilder :FormBuilder , private abonnementService : AbonnementService,
              private router : Router,private activatedRoute :ActivatedRoute) {
                this.abonnementForm = this.formBuilder.group({
                  dateDebut: ["", [Validators.required]],
                  dateFin: ["", [Validators.required]],
                  prixAbon: ["", [Validators.required]],
                  typeAbonnement: [TypeAbonnement.ANNUEL, [Validators.required]]
    })
  }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(res  => this.id = res.get('id'));

    this.abonnementService.getAbonnement(this.id).subscribe(
      (abonnementData: Abonnement) => {
        this.abonnement = abonnementData;
        // Patch the form with the Skieur data
        this.abonnementForm.patchValue({
          dateDebut: abonnementData.dateDebut,
          dateFin: abonnementData.dateFin,
          prixAbon: abonnementData.prixAbon,
          typeAbonnement: abonnementData.typeAbonnement,
        });
      },
      (error) => {
        console.error('Error fetching abonnement data:', error);
      }
    );


  }
  updateAbonnement() {

    if (this.abonnementForm.valid) {
      let a : Abonnement = this.abonnementForm.value;
      this.abonnementService.updateAbonnement(a).subscribe(
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
      )
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
