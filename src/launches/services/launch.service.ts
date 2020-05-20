import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Launch } from "../../shared/interfaces/launch";
import { HttpService } from "src/shared/services/http/http.service";

@Injectable({
  providedIn: "root",
})
export class LaunchService extends HttpService<Launch> {
  constructor(http: HttpClient) {
    super(http, "https://api.spacexdata.com/v3/launches");
  }
}
