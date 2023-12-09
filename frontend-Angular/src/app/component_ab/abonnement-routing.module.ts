import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonnementListComponent } from './components/abonnement-list/abonnement-list.component';
import { AbonnementCreateComponent } from './components/abonnement-create/abonnement-create.component';
import { AbonnementUpdateComponent } from './components/abonnement-update/abonnement-update.component';
import { AbonnementDeleteComponent } from './components/abonnement-delete/abonnement-delete.component';


const routes: Routes = [
  {path : '' , component : AbonnementListComponent},
  {path : 'add' , component : AbonnementCreateComponent},
  {path : 'update/:id' , component : AbonnementUpdateComponent},
  {path : 'delete/:id' , component : AbonnementDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbonnementRoutingModule { }
