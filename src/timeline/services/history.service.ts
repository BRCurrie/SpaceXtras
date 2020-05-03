import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { HttpService } from "src/shared/services/http/http.service";

import { History } from "../interfaces/history";

@Injectable({
  providedIn: "root",
})
export class HistoryService extends HttpService<History> {
  // historyApi = "https://api.spacexdata.com/v3/history";

  constructor(http: HttpClient) {
    super(http, "https://api.spacexdata.com/v3/history");
  }
}
