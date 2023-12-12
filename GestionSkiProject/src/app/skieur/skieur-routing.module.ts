import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListSkieursComponent} from "./components/list-skieurs/list-skieurs.component";
import {AddSkieurComponent} from "./components/add-skieur/add-skieur.component";
import {UpdateSkieurComponent} from "./components/update-skieur/update-skieur.component";

const routes: Routes = [
  {path : '' , component : ListSkieursComponent},
  { path: 'add', component: AddSkieurComponent },
  { path: 'update/:id', component: UpdateSkieurComponent },

];
@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class SkieurRoutingModule {

}
