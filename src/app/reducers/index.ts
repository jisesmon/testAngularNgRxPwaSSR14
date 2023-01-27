import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


//ali test
/* 
npx ng generate @ngrx/schematics:store  state --root --module app.module.ts
CREATE src/app/reducers/index.ts (360 bytes)
UPDATE src/app/app.module.ts (1151 bytes)
*/

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
