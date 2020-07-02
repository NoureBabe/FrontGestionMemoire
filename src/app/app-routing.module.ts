import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ProposerSujetComponent} from './proposerSujet/proposer-sujet.component';
import { ListeProposeComponent } from './liste-propose/liste-propose.component';
import { ProposeEnsegniantComponent } from './propose-ensegniant/propose-ensegniant.component';
//import { EnseigniantPropositionComponent } from './enseigniant-proposition/enseigniant-proposition.component';
import { NouvelleProposEnseigniatComponent } from './nouvelle-propos-enseigniat/nouvelle-propos-enseigniat.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{path :"login",component:LoginComponent
},
{path :"propose",component:ProposerSujetComponent
},
{path :"Listepropose",component:ListeProposeComponent
},
{path :"ProposeEnsegniant",component:ProposeEnsegniantComponent
},

{path :"NouvelleProposEnseigniat",component:NouvelleProposEnseigniatComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
