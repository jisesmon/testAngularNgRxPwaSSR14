import { Component, OnInit } from '@angular/core';
import { PwaService } from './shared/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx14-ang14';
  isOnline=false;
  isOffline=false;
  constructor(
    private pwaService:PwaService
  ){}
  ngOnInit(): void {
    window.addEventListener('online', this.funOnline.bind(this) ); 
   //not work window.addEventListener('offline',this.funOnline.bind(this)  );
   //not work window.onoffline= this.funOffline;
  }

    funOnline(){
      this.isOnline = navigator.onLine;
      console.log('onLine navigator.onLine',navigator.onLine);
     
      //that must refresh when  user opened app pwa
      // if(navigator.onLine)
      //  this.pwaService.getUpdates();
      
    }

    funOffline(){
      this.isOffline=!navigator.onLine;
      console.log('offline navigator.onLine',navigator.onLine);
    }

}
