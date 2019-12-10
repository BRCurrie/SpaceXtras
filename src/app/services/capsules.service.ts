import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

// interfaces
import { Capsules } from "../interfaces/capsules";

@Injectable({
  providedIn: "root"
})
export class CapsulesService {
  private allCapsulesUrl = "https://api.spacexdata.com/v3/capsules";
  // private oneCapsuleUrl =
  //   "https://api.spacexdata.com/v3/capsules/{{capsule_serial}}";
  // private upcomingCapsuleUrl = 'https://api.spacexdata.com/v3/capsules/upcoming';

  constructor(private http: HttpClient) {}

  // getAllCapsules(): Observable<Capsules[]> {
  //   return this.http.get<Capsules[]>(this.allCapsulesUrl);
  // }

  getCapsulesApi(): any {
    // expect a get request to SpaceX
    return this.http.get<Capsules>(this.allCapsulesUrl).pipe(
      // it should retry 3 times.
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
