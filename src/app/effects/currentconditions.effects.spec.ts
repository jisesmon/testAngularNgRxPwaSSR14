import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CurrentconditionsEffects } from './currentconditions.effects';

describe('CurrentconditionsEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrentconditionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrentconditionsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CurrentconditionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
