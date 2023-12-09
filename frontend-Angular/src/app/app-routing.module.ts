import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
  { path: '', redirectTo: 'skieurs', pathMatch: 'full' },
  { path : 'skieurs' , loadChildren : () => import('./skieur/skieur.module').then(s => s.SkieurModule)},
  { path: '', redirectTo: 'abonnements', pathMatch: 'full' },
  { path : 'abonnements' , loadChildren : () => import('./component_ab/abonnement.module').then(a => a.AbonnementModule)},
  { path: '**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
