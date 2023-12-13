import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListCoursComponent} from "./components/list-cours/list-cours.component";
import {AddCoursComponent} from "./components/add-cours/add-cours.component";
import {UpdateCoursComponent} from "./components/update-cours/update-cours.component";
import {CoursRoutingModule} from "./cours-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { StatsWidgetComponent} from './components/stats-cours/widgets03.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { StatsComponent} from './components/stats-page/stats-cours.component';








@NgModule({
  declarations: [
    ListCoursComponent,
    AddCoursComponent,
    UpdateCoursComponent,
    StatsWidgetComponent,
    StatsComponent

  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatIconModule

  ]
})
export class CoursModule { }
