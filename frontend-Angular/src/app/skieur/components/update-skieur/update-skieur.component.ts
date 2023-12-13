import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SkieurService} from "../../../services/skieur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Skieur} from "../../../models/skieur";
import {Observable} from "rxjs";

@Component({
  selector: 'app-update-skieur.ts',
  templateUrl: './update-skieur.component.html',
  styleUrls: ['./update-skieur.component.scss']
})
export class UpdateSkieurComponent {

  skieurForm : FormGroup;
  skieur : Skieur;
  id : string;
  constructor(private formBuilder :FormBuilder , private skieurService : SkieurService,
              private router: Router,private activatedRoute :ActivatedRoute) {
    this.skieurForm = this.formBuilder.group({
      nomS : ["" ,[Validators.required]],
      prenomS : ["",[Validators.required]],
      ville : ["" ,[Validators.required]],
      dateNaissance : ["" ,[Validators.required]]
    })
  }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(res  => this.id = res.get('id'));

    this.skieurService.getSkieur(this.id).subscribe(
      (skieurData: Skieur) => {
        this.skieur = skieurData;
        // Patch the form with the Skieur data
        this.skieurForm.patchValue({
          nomS: skieurData.nomS,
          prenomS: skieurData.prenomS,
          ville: skieurData.ville,
          dateNaissance: skieurData.dateNaissance,
        });
      },
      (error) => {
        console.error('Error fetching skieur data:', error);
      }
    );





  }
  updateSkieur() {

    if (this.skieurForm.valid) {
      this.skieur.nomS = this.nomS.value;
      this.skieur.prenomS = this.prenomS.value;
      this.skieur.ville = this.ville.value;
      this.skieur.dateNaissance = this.dateNaissance.value;
      this.skieurService.updateSkieur(this.skieur).subscribe(
        (response) => {
          if (response) {

            this.router.navigate(['skieurs']);

          } else {
            console.error('Unexpected response status:');
          }
        },
        (error) => {

          console.error('Error adding skieur:', error);
        }
      )
    }

  }
  get nomS(){
    return this.skieurForm.get('nomS');
  }
  get prenomS(){
    return this.skieurForm.get('prenomS');
  }
  get ville(){
    return this.skieurForm.get('ville');
  }
  get dateNaissance(){
    return this.skieurForm.get('dateNaissance');
  }
}
