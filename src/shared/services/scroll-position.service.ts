import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ScrollPositionService {
  scroll = new BehaviorSubject(0);
  data = this.scroll.asObservable();

  constructor() {}

  updatedDataSelection(data: number) {
    this.scroll.next(data);
  }
}
