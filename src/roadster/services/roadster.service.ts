import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { catchError, retry } from "rxjs/operators";

// import "rxjs/add/observable/throw";

// Interface
import { Roadster } from "../interfaces/roadster";

// Changed function type from any on getRoadster, added [] to get<Roadster>

@Injectable({
  providedIn: "root",
})
export class RoadsterService {
  private roadsterUrl = "https://api.spacexdata.com/v3/roadster";

  constructor(private http: HttpClient) {}

  getRoadster(): Observable<Roadster[]> {
    // expect a get request to SpaceX
    return this.http.get<Roadster[]>(this.roadsterUrl).pipe(
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
