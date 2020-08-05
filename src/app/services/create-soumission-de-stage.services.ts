import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import {HttpClient,HttpClientModule, HttpHeaders} from '@angular/common/http';
import { from } from 'rxjs';
import { Key } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class CreateSoumissionDeStageService {
     public host:string="http://localhost:8080" ;
     public host2:string="http://localhost:8080/login";
      public host3:string="http://localhost:8080/etudiants";
     public jwt:any ;
     public jwToken = null;
     username:any=null;
     prenom:any=null;
    Etudiant;
      roles:Array<string>;

    // get ensigniant data
    getEnsigniantData(){
      this.http.get('')
    }  
     
  constructor(private http:HttpClient) { }
  login(date){
    return this.http.post(this.host2, date, {observe:'response'})
    }
    GetMatricule(url){
      url=this.host3;
       let headers=new  HttpHeaders({'Authorization':'Bearer '+this.jwToken})
         return this.http.get(url,{headers: headers});
     }
  saveToken(jwt: string){

      localStorage.setItem('token',jwt);
      console.log(jwt)
      let decode= window.atob(jwt.split(".")[1])
      this.roles = JSON.parse(decode).roles;

      this.username =JSON.parse(decode).sub;
      this.prenom=JSON.parse(decode).sub;
      localStorage.setItem('username',this.username);
      localStorage.setItem('prenom',this.prenom);
     //localStorage.setItem('token',jwt);
     //console.log(jwt)
     //let decode= window.atob(jwt.split(".")[1])
     //this.roles = JSON.parse(decode).roles;
     //this.username =JSON.parse(decode).sub;
     //localStorage.setItem('username',this.username);
    //   this.jwt=jwt;
    //  this.parseJWt();
  }
  //  parseJWt(){
  //  let jwtHelper=new JwtHelperService();
  //  let objJWT=jwtHelper.decodeToken(this.jwt);
  //  this.username=objJWT.obj;
  //  this.roles=objJWT.roles;
  //  //localStorage.setItem('username',this.username);


  // }
  loadToken(){

      this.jwToken=localStorage.getItem('token');

  }
  //   loadRole(){
  //     let decode = window.atob(localStorage.getItem('token').replace("Bearer",'').split(".")[1]);
  //     this.roles = JSON.parse(decode).roles;
  //  }

LogOut(){

     localStorage.removeItem('token');
     this.intialParams();
     
   }

   intialParams(){
     this.jwt=undefined;
     this.username=undefined;
     this.roles=undefined;

   }
//   getTasks(){
//     if(this.jwToken ==null) this.loadToken();
//     return this.http.get(this.host + "/tasks",{headers: new HttpHeaders({'Authorization':this.jwToken})});
//   }
  isEnsigniant(){
    if (this.roles){
      if
        (this.roles.indexOf('Ensigniant')>=0)
        return true;
      }
      return false;
    }
    //return this.roles.indexOf('Ensigniant')>=0;
    // for(let r of this.roles){
    //   if(r.authority == "Ensigniant")
    //   return true;
    // }
    // return false;ng
    
    isCordinateur(){
      if (this.roles){
        if
          (this.roles.indexOf('Cordinateur')>=0)
          return true;
        }
        return false;
      }
  isEtudiant(){
    if (this.roles){
      if
        (this.roles.indexOf('Etudiant')>=0)
        return true;
      }
      return false;
    }
    // for(let r of this.roles){
    //   if(r.authority == "Etudian")
    //   return true;
    // }
    // return false;


    isAuthenticated(){
      return this.roles &&  (this.isEnsigniant() || this.isEtudiant()|| this.isCordinateur());
    }

    // hasRole(role:string):boolean {
    //      this.loadRole();
    //      for(let r of this.roles){
    //        if(r.authority == role) return true;
    //      }
    //      return false;
    // }

  getUsername(){
    return localStorage.getItem('username');
  }
 
  getRessource(url){
    let headers=new  HttpHeaders({'Authorization':'Bearer '+ this.jwToken})
    return this.http.get(url,{headers: headers});
  
   }

  /// atigh code 
  
  
  createStage(){
      let headers = new  HttpHeaders({'Authorization':'Bearer '+ this.jwToken});
      return this.http.post('',{headers:headers})
  }
  getEncadrants(){
    let headers = new  HttpHeaders({'Authorization':'Bearer '+ this.jwToken});
    return this.http.get('',{headers:headers})
  }

  getJury(){
    let headers = new  HttpHeaders({'Authorization':'Bearer '+ this.jwToken});
    return this.http.get('',{headers:headers})
  }
  getPlaningSoutenances(){
    let headers = new  HttpHeaders({'Authorization':'Bearer '+ this.jwToken});
    return this.http.get('',{headers:headers})
  }



}
