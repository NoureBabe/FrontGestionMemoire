import { Component, OnInit } from '@angular/core';
import { PropositionGroupeplannigService } from '../proposition-group_planning.service';
import { from } from 'rxjs';
import { salle } from '../models/salle.models';
import { jury} from '../models/Jury.models'
;
import { Router } from '@angular/router';
import { SujetEnseignatService } from '../sujet-enseignat.service';
//import { Proposerjury } from '../proposer-jury.service';
@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  salles;
  url2="/plannings?projection=sout1";
  groupes;

  
  plannings;
  jury;
  
  sals:salle[]=[
    {id: 1,name: 'salle 1'},
    {id: 1,name: 'salle 2'},
    {id: 1,name: 'salle 3'},
    {id: 1,name: 'salle 4'},
    {id: 1,name: 'salle 5'},
    {id: 1,name: 'salle 6'},
    {id: 1,name: 'salle 7'},
    {id: 1,name: 'salle 8'},
    {id: 1,name: 'salle 9'},
    {id: 1,name: 'salle 10'},
    {id: 1,name: 'salle 11'},
    {id: 1,name: 'salle 12'},
    {id: 1,name: 'salle 13'},
    {id: 1,name: 'salle 14'},
    {id: 1,name: 'salle 15'},
    {id: 1,name: 'amphi 1'},
    {id: 1,name: 'amphi 2'},
    {id: 1,name: 'amphi 3'},
    {id: 1,name: 'amphi 4'},
    {id: 1,name: 'amphi 5'},


  ];
  jurys :jury[]=[
    {id: 1,name: 'Dr.ahmed'},
    {id: 2,name: 'Dr.yehye'},
    {id: 3,name: 'Dr.sam'},
    {id: 4,name: 'Dr.hamadi'},
    {id: 5,name: 'Dr.toutou'},
    {id: 6,name: 'Dr.zeynebou'},
    {id: 7,name: 'Dr.mouvide'},
   
  ];

   constructor(private PropositionGroupeplannigService: PropositionGroupeplannigService,private router: Router,private sujetEnseignatService:SujetEnseignatService) { }

  ngOnInit() {
    this.PropositionGroupeplannigService.getGroupe(this.PropositionGroupeplannigService.url)
    .subscribe(data=>{
      this.groupes=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
    let url2 =this.PropositionGroupeplannigService.host2+this.url2
    this.PropositionGroupeplannigService.getJury(this.url2)
    .subscribe(data=>{
      this.plannings=data;
      console.log(data);

    },err=>{
       console.log(err);
    })
   
  }
 // onsavePlanningsujet(data){
     // console.log(data);
   //  let url =this.propositionplanningservice.host2+this.url2
     //this.propositionplanningservice.PostPlanningt(this.url2,data)
     //.subscribe(data=>{
       
     //},err=>{
     //  console.log(err)
     //})
    //}
    onsaveSujetEnseigniant(data){
      // console.log(data);
      let url =this.sujetEnseignatService.host2+this.url2
      this.sujetEnseignatService.PostSujet(this.url2,data)
      .subscribe(data=>{
        
      },err=>{
        console.log(err)
      })
      this.router.navigateByUrl("/ListeproposeEnseignat");
     }
     GetSalle(){
       return this.PropositionGroupeplannigService.getGroupe(this.PropositionGroupeplannigService.url)
     }
     getJury(){
  return this.PropositionGroupeplannigService.getJury(this.url2)
}
;

















}
