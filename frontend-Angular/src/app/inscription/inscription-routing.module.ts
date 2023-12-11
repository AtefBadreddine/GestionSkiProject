import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllComponent } from './list-all/list-all.component';
import { AddInscriptionComponent } from './add-inscription/add-inscription.component';

const routes: Routes = [
  {path : '' , component : ListAllComponent},

  {path : 'add' , component : AddInscriptionComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionRoutingModule { }