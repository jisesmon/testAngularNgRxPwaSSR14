import { Action, createReducer, on } from '@ngrx/store';

//ali test
/*
npx ng generate @ngrx/schematics:reducer Zip? Should we add success and failure actions to the reducer? Yes
CREATE src/app/reducers/zip-codes.reducer.spec.ts (335 bytes)
CREATE src/app/reducers/zip-codes.reducer.ts (235 bytes)
 */
export const zipCodesFeatureKey = 'zipCodes';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

);
