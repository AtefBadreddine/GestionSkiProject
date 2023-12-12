import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { ListAllComponent } from './list-all/list-all.component';
import { AddInscriptionComponent } from './add-inscription/add-inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateInscriptionComponent } from './update-inscription/update-inscription.component';


@NgModule({
  declarations: [
    ListAllComponent,
    AddInscriptionComponent,
    UpdateInscriptionComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InscriptionModule { }
