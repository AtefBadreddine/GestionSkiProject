import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


;
import { AbonnementListComponent } from './components/abonnement-list/abonnement-list.component';
import { AbonnementCreateComponent } from './components/abonnement-create/abonnement-create.component';
import { AbonnementRoutingModule } from './abonnement-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AbonnementListComponent,
    AbonnementCreateComponent,
    


  ],
  imports:[
    CommonModule,
    AbonnementRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class AbonnementModule { }
