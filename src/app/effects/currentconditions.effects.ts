import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';


//test ali
/*npx ng generate @ngrx/schematics:effect   currentconditions   --module app.module --group
? Should we wire up success and failure actions? Yes
? What should be the prefix of the effect? load
CREATE src/app/effects/currentconditions.effects.spec.ts (650 bytes)
CREATE src/app/effects/currentconditions.effects.ts (204 bytes)
UPDATE src/app/app.module.ts (1289 bytes)
*/
@Injectable()
export class CurrentconditionsEffects {


  constructor(private actions$: Actions) {}
}
