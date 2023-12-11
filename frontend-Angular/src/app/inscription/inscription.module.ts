import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { ListAllComponent } from './list-all/list-all.component';
import { AddInscriptionComponent } from './add-inscription/add-inscription.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListAllComponent,
    AddInscriptionComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    ReactiveFormsModule
  ]
})
export class InscriptionModule { }
