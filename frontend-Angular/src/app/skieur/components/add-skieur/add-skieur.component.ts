import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SkieurService} from "../../../services/skieur.service";
import {Skieur} from "../../../models/skieur";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-skieur.ts',
  templateUrl: './add-skieur.component.html',
  styleUrls: ['./add-skieur.component.scss']
})
export class AddSkieurComponent {

    skieurForm : FormGroup;
    submitted : boolean = false;
    constructor(private formBuilder :FormBuilder , private skieurService : SkieurService,
                private router: Router) {
    }

    ngOnInit() {

    this.skieurForm = this.formBuilder.group({
      nomS : ["" ,[Validators.required]],
      prenomS : ["" ,[Validators.required]],
      ville : ["" ,[Validators.required]],
      dateNaissance : ["" ,[Validators.required]]
      })

    }

  addSkieur() {
    this.submitted = true;
    if (this.skieurForm.valid) {
      let s : Skieur = this.skieurForm.value;
      this.skieurService.addSkieur(s).subscribe(
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
