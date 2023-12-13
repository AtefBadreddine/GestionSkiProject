import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListCoursComponent } from "./components/list-cours/list-cours.component";
import { AddCoursComponent } from "./components/add-cours/add-cours.component";
import { UpdateCoursComponent } from "./components/update-cours/update-cours.component";
import { StatsComponent } from "./components/stats-page/stats-cours.component";


const routes: Routes = [
  { path: '', component: ListCoursComponent },
  { path: 'add', component: AddCoursComponent },
  { path: 'update/:id', component: UpdateCoursComponent },
  { path: 'stats', component: StatsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursRoutingModule {}
