import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list/list.component";
import {AddComponent} from "./components/add/add.component";
import {UpdateComponent} from "./components/update/update.component";
import { ListCoursComponent } from "./components/list_cours/list_cours.component";

const routes: Routes = [
  {path : '' , component : ListComponent},
  { path: 'add', component: AddComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'list_cours', component: ListCoursComponent },

];
@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class RoutingModule {

}
