import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListSkieursComponent} from "./components/list-skieurs/list-skieurs.component";
import {AddSkieurComponent} from "./components/add-skieur/add-skieur.component";
import {UpdateSkieurComponent} from "./components/update-skieur/update-skieur.component";
import {SkieurRoutingModule} from "./skieur-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListSkieursComponent,
    AddSkieurComponent,
    UpdateSkieurComponent
  ],
  imports: [
    CommonModule,
    SkieurRoutingModule,
    ReactiveFormsModule
  ]
})
export class SkieurModule { }
