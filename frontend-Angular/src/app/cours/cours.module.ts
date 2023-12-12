import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListCoursComponent} from "./components/list-cours/list-cours.component";
import {AddCoursComponent} from "./components/add-cours/add-cours.component";
import {UpdateCoursComponent} from "./components/update-cours/update-cours.component";
import {CoursRoutingModule} from "./cours-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListCoursComponent,
    AddCoursComponent,
    UpdateCoursComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoursModule { }
