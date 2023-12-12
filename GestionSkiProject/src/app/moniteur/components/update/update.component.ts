import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Service} from "../../../services/moniteur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Moniteur} from "../../../models/moniteur";
import {Observable} from "rxjs";

@Component({
  selector: 'app-update-skieur.ts',
  templateUrl: './update-skieur.component.html',
  styleUrls: ['./update-skieur.component.scss']
})
export class UpdateComponent {

  form : FormGroup;
  moniteur : Moniteur;
  id : string;
  constructor(private formBuilder :FormBuilder , private service : Service,
              private router: Router,private activatedRoute :ActivatedRoute) {
    this.form = this.formBuilder.group({
      nomM : ["" ,[Validators.required]],
      prenomM : ["",[Validators.required]],
      dateRecru : ["", [Validators.required]]
    })
  }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(res  => this.id = res.get('id'));

    this.service.get(this.id).subscribe(
      (data: Moniteur) => {
        this.moniteur = data;
        console.log(this.moniteur);
        // Patch the form with the Skieur data
        this.form.patchValue({
          nomM: data.nomM,
          prenomM: data.prenomM,
          dateRecru: data.dateRecru
        });
      },
      (error) => {
        console.error('Error fetching skieur data:', error);
      }
    );





  }
  update() {

    if (this.form.valid) {
      this.moniteur.nomM = this.nomM.value;
      this.moniteur.prenomM = this.prenomM.value;
      this.moniteur.dateRecru = this.dateRecru.value;
      this.service.update(this.moniteur).subscribe(
        (response) => {
          if (response) {

            this.router.navigate(['moniteurs']);
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
  get nomM(){
    return this.form.get('nomM');
  }
  get prenomM(){
    return this.form.get('prenomM');
  }
  get dateRecru(){
    return this.form.get('dateRecru');
  }
}
