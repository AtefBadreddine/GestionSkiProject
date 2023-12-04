import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {ListComponent} from "./components/list/list.component";
import {AddComponent} from "./components/add/add.component";
import {UpdateComponent} from "./components/update/update.component";
import { ListCoursComponent } from './components/list_cours/list_cours.component';
import {RoutingModule} from "./moniteur-routing.module";




@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    UpdateComponent,
    ListCoursComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class Module { }
