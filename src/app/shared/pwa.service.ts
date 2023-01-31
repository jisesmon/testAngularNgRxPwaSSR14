import { Injectable } from '@angular/core';
import { SwUpdate ,SwPush ,} from '@angular/service-worker';
import { interval } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  
  constructor(
   // private _snackBar: MatSnackBar,
    private _swUpdate: SwUpdate,
    private _swPush: SwPush,
    
  ) {

    console.log("PwaService constructor" );
    //test swPush
    if(_swPush.isEnabled)
    {
       _swPush.notificationClicks.subscribe(x=>{
        console.log("_swPush.notificationClicks ",x)
       }) 
      _swPush.messages.subscribe(x=>{
        console.log("_swPush.messages ",x);
       })  ;
      //?? _swPush.requestSubscription

    }


    this.getUpdates();
  }

  getUpdates(){
    if (environment.production) {
      this.setupUpdates();
    }
  }
  setupUpdates() {

    console.log("_swUpdate.isEnabled ",this._swUpdate.isEnabled );
    if(this._swUpdate.isEnabled){
     this._swUpdate.available.subscribe(u=> { 
      console.log("_swUpdate.available ",u );
      this._swUpdate.activateUpdate().then(e => {
        console.log("_swUpdate.activateUpdate ",e );
        if(confirm(" app pwa is  update ?"))
        location.reload() ;//ok window.location.reload();

       // this._snackBar.open("There is an update",
       //  "reload app", { duration: 99999 }).onAction().subscribe(
        //  () => location.reload()
       // );
      });
     });

     const everySixHours$ = interval(60 * 1000);//6 * 60 * 60 * 1000
     everySixHours$.subscribe((x) =>
      //this._swUpdate.checkForUpdate()
      console.log(" everySixHours$ ",x ) 
      ); //erro osol 
    }
  }

}
