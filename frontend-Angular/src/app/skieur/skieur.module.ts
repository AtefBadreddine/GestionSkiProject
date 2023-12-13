import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListSkieursComponent} from "./components/list-skieurs/list-skieurs.component";
import {AddSkieurComponent} from "./components/add-skieur/add-skieur.component";
import {UpdateSkieurComponent} from "./components/update-skieur/update-skieur.component";
import {SkieurRoutingModule} from "./skieur-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { PaginationComponent } from './components/pagination/pagination.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import {SkTooltipDirective} from "../directives/sk-tooltip.directive";



@NgModule({
  declarations: [
    ListSkieursComponent,
    AddSkieurComponent,
    UpdateSkieurComponent,
    PaginationComponent,
    TooltipComponent,
    SkTooltipDirective
  ],
  imports: [
    CommonModule,
    SkieurRoutingModule,
    ReactiveFormsModule
  ]
})
export class SkieurModule { }
