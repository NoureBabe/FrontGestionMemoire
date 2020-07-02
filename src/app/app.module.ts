import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AuthentificationComponent } from './authentification/authentification.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ProposerSujetComponent } from './proposerSujet/proposer-sujet.component';
import { ListeProposeComponent } from './liste-propose/liste-propose.component';
import { ProposeEnsegniantComponent } from './propose-ensegniant/propose-ensegniant.component';
//import { EnseignatComponent } from './enseignat/enseignat.component';
//mport { EnseigniantPropositionComponent } from './enseigniant-proposition/enseigniant-proposition.component';
import { NouvelleProposEnseigniatComponent } from './nouvelle-propos-enseigniat/nouvelle-propos-enseigniat.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
//import { ListeusrComponent } from './listeusr/listeusr.component';
@NgModule({
  declarations: [
    AppComponent,

   // AuthentificationComponent,

    EtudiantComponent,

    ProposerSujetComponent,

    ListeProposeComponent,

    ProposeEnsegniantComponent,

    //EnseignatComponent,

    //EnseigniantPropositionComponent,

    NouvelleProposEnseigniatComponent,

    LoginComponent,
    //ListeusrComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
