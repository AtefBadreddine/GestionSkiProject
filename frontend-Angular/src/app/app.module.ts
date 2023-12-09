import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SkieurModule} from "./skieur/skieur.module";
import { AbonnementListComponent } from './component_ab/components/abonnement-list/abonnement-list.component';
import { AbonnementCreateComponent } from './component_ab/components/abonnement-create/abonnement-create.component';
import { AbonnementUpdateComponent } from './component_ab/components/abonnement-update/abonnement-update.component';
import { AbonnementDeleteComponent } from './component_ab/components/abonnement-delete/abonnement-delete.component';
import { AbonnementModule } from './component_ab/abonnement.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    NotFoundComponent,
    AbonnementListComponent,
    AbonnementCreateComponent,
    AbonnementUpdateComponent,
    AbonnementDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AbonnementModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
