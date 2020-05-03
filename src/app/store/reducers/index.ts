import {
  Params,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromRouter from "@ngrx/router-store";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  // required by NGRX
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
};

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>("routerReducer");

// create custom serializer
// everytime the url is changed or you navigate somewhere this function is called.
export class CustomerSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    // compose new object based on properties of the router
    // return url, queryParams, and params
    // destructure the url
    const { url } = routerState;
    // queryParams too
    const { queryParams } = routerState.root;
    // iterate through routerState tree from Angulars Router and take properties
    // as needed, then bind to the store.
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    // then bind the params from the child routes.
    const { params } = state;
    // return the object to be bound to our state tree
    return { url, queryParams, params };
  }
}
