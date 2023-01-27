import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {  HttpClientModule } from '@angular/common/http';
import { appReducer } from './shared/store/app.reducer';
import { PenComponent } from './pen/pen.component';
import { reducers, metaReducers } from './reducers';
import { CurrentconditionsEffects } from './effects/currentconditions.effects';

@NgModule({
  declarations: [
    AppComponent,
    PenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ appState: appReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }), 
    StoreModule.forRoot(reducers, { metaReducers }), //test ali
    !environment.production ? StoreDevtoolsModule.instrument() : [], //test ali
    EffectsModule.forFeature([CurrentconditionsEffects])  //test ali
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
