import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Effect, Actions, ofType } from "@ngrx/effects";

import * as RouterActions from "../actions/router.action";

import { tap, map } from "rxjs/operators";

@Injectable()
export class RouterEffects {
  constructor(
    private action$: Actions,
    private router: Router,
    private location: Location
  ) {}

  // setup our effects.
  // we want to handle a side effect of navigating, we do not want to dispatch these
  @Effect({ dispatch: false })
  navigate$ = this.action$.pipe(
    ofType(RouterActions.GO),
    map((action: RouterActions.Go) => action.payload),
    // step out and handle side effect
    // query is renamed as queryParams in ngrx documentation
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  );

  // @Effect({ dispatch: false })
  // navigateBack$ = this.action$
  //   .ofType(RouterActions.BACK)
  //   .pipe(tap(() => this.location.back()));

  @Effect({ dispatch: false })
  navigateBack$ = this.action$.pipe(
    ofType(RouterActions.BACK),
    tap(() => this.location.back())
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.action$.pipe(
    ofType(RouterActions.FORWARD),
    tap(() => this.location.forward())
  );
}
