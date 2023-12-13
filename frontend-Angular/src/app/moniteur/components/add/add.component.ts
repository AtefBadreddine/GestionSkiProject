import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Service} from "../../../services/moniteur.service";
import {Moniteur} from "../../../models/moniteur";
import {Router} from "@angular/router";

@Component({
  selector: 'add-component',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

    form : FormGroup;

    constructor(private formBuilder :FormBuilder , private service : Service,
                private router: Router) {
    }

    ngOnInit() {

    this.form = this.formBuilder.group({
      nomM : ["" ,[Validators.required]],
      prenomM : ["" ,[Validators.required]],
      dateRecru : ["" ,[Validators.required]]
      })

    }

  add() {

    if (this.form.valid) {
      let s : Moniteur = this.form.value;
      this.service.add(s).subscribe(
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
