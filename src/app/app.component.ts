import { Component, OnInit } from '@angular/core';
import { AuthentiService } from './authenti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mon-premier-projet';

constructor (private authService:AuthentiService){}

  ngOnInit() :void{
    this.authService.loadToken();
  }
isEnsigniant(){
  return this.authService.isEnsigniant();

  }
   isEtudiant(){
      return this.authService.isEtudiant();

      }
      isAuthenticated(){
        return this.authService.isAuthenticated;
      }
      LogOut(){
        return this.authService.LogOut();
       
      }
    }
   