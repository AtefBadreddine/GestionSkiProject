import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonnementListComponent } from './components/abonnement-list/abonnement-list.component';
import { AbonnementCreateComponent } from './components/abonnement-create/abonnement-create.component';
import { UpdateAbonnementComponent } from './components/update-abonnement/update-abonnement.component';



const routes: Routes = [
  {path : '' , component : AbonnementListComponent},
  {path : 'add' , component : AbonnementCreateComponent},
  {path : 'update/:id' , component : UpdateAbonnementComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbonnementRoutingModule { }
