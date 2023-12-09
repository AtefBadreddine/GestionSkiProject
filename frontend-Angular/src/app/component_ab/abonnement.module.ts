import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


;
import { AbonnementListComponent } from './components/abonnement-list/abonnement-list.component';
import { AbonnementCreateComponent } from './components/abonnement-create/abonnement-create.component';
import { AbonnementUpdateComponent } from './components/abonnement-update/abonnement-update.component';
import { AbonnementDeleteComponent } from './components/abonnement-delete/abonnement-delete.component';
import { AbonnementRoutingModule } from './abonnement-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AbonnementListComponent,
    AbonnementCreateComponent,
    AbonnementUpdateComponent,
    AbonnementDeleteComponent


  ],
  imports:[
    CommonModule,
    AbonnementRoutingModule,
    ReactiveFormsModule
  ]
})
export class AbonnementModule { }
