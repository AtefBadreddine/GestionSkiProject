import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


;
import { AbonnementListComponent } from './components/abonnement-list/abonnement-list.component';
import { AbonnementCreateComponent } from './components/abonnement-create/abonnement-create.component';
import { AbonnementRoutingModule } from './abonnement-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateAbonnementComponent } from './components/update-abonnement/update-abonnement.component';




@NgModule({
  declarations: [
    AbonnementListComponent,
    AbonnementCreateComponent,
    UpdateAbonnementComponent
    
    


  ],
  imports:[
    CommonModule,
    AbonnementRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class AbonnementModule { }
