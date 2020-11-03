import { Component, OnInit } from '@angular/core';
import { SujetEnseignatService } from '../sujet-enseignat.service';
import { Router } from '@angular/router';
import { ProposerGroupeService } from '../proposer-groupe.service';

@Component({
  selector: 'app-propose-ensegniant',
  templateUrl: './propose-ensegniant.component.html',
  styleUrls: ['./propose-ensegniant.component.scss']
})
export class ProposeEnsegniantComponent implements OnInit {
 
  url2="/sujets";
  sujets;
  sujets1;
  url3="/sujets?projection=s1"
  url4="/sujets?projection=s2"
  enseignat;
  
  groupeFilter;
  constructor( private sujetEnseignatService:SujetEnseignatService,private proposerGroupeService:ProposerGroupeService) { }
 
  ngOnInit() {
    // this.sujetEnseignatService.GetEnsigniants(this.sujetEnseignatService.url)
    // .subscribe(data=>{
    //   this.enseignat=data;
    //   console.log(data);

    // },err=>{
    //   console.log(err);
    // })
    let url1 =this.sujetEnseignatService.host2+this.url3
    this.sujetEnseignatService.GetSujet(this.url3)
    .subscribe(data=>{
      this.sujets=data;
      console.log(data);

    },err=>{
      // console.log(err);
    })
  
    localStorage.setItem('MATRICULE', (JSON.parse((localStorage.getItem('USER_DATA')) as any).etudiants[0].matriculeetudiant));
    this.proposerGroupeService.getGroupe(localStorage.getItem('MATRICULE')).subscribe(data => {
      console.log(data);
      this.groupeFilter = data;
    });
  }
  
}