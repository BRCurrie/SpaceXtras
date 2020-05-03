import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

// Interface
import { Launch } from "../../shared/interfaces/launch";
import { HttpService } from "../../shared/services/http/http.service";

@Injectable({
  providedIn: "root",
})
export class NextLaunchService extends HttpService<Launch> {
  apiUrl = "https://api.spacexdata.com/v3/launches/next";

  constructor(http: HttpClient) {
    super(http, "https://api.spacexdata.com/v3/launches/next");
  }
}
