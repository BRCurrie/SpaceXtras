import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

// Interface
import { Launch } from "../interfaces/launch/launch";

@Injectable({
  providedIn: "root"
})
export class LaunchService {
  private allLaunchesUrl = "https://api.spacexdata.com/v3/launches";

  constructor(private http: HttpClient) {}

  getAllLaunches(): any {
    // expect a get request to SpaceX
    return this.http.get<Launch>(this.allLaunchesUrl).pipe(
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
