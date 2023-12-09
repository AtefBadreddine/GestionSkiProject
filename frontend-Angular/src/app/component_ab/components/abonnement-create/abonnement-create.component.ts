import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-abonnement-create',
  templateUrl: './abonnement-create.component.html',
  styleUrls: ['./abonnement-create.component.scss']
})
export class AbonnementCreateComponent {

 abonnementForm: FormGroup;
 constructor(private formBuilder :FormBuilder ){}
  ngOnInit() {
    // Initialisation du formulaire réactif avec des champs et des validateurs
    this.abonnementForm = this.formBuilder.group({
      dateDebyt: ["", [Validators.required]],
      dateFin: ["", [Validators.required]],
      prixAbon: ["", [Validators.required]],
      typeAbonnement: ["", [Validators.required]]
    });
  }


}
