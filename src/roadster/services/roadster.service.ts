import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { HttpService } from "src/shared/services/http/http.service";

import { Roadster } from "../interfaces/roadster";

@Injectable({
  providedIn: "root",
})
export class RoadsterService extends HttpService<Roadster> {
  constructor(http: HttpClient) {
    super(http, "https://api.spacexdata.com/v3/roadster");
  }
}
