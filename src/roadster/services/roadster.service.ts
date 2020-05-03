import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { HttpService } from "src/shared/services/http/http.service";

// Interface
import { Roadster } from "../interfaces/roadster";

@Injectable({
  providedIn: "root",
})
export class RoadsterService extends HttpService<Roadster> {
  // roadsterAPI = "https://api.spacexdata.com/v3/roadster";

  constructor(http: HttpClient) {
    super(http, "https://api.spacexdata.com/v3/roadster");
  }
}
