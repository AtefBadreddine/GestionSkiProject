import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
  { path: '', redirectTo: 'skieurs', pathMatch: 'full' },
  { path : 'skieurs' , loadChildren : () => import('./skieur/skieur.module').then(s => s.SkieurModule)},
  { path : 'inscriptions' , loadChildren : () => import('./inscription/inscription.module').then(s => s.InscriptionModule)},

  { path: '**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
