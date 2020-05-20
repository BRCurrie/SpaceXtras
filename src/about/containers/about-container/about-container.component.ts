import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { JumboData } from "../../../shared/interfaces/jumboData";

@Component({
  selector: "app-about-container",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-jumbotron [background]="bgImg" [pageData]="pageData"> </app-jumbotron>
    <app-about></app-about>
  `,

  styles: [],
})
export class AboutContainerComponent implements OnInit {
  bgImg: string = "aboutImage";

  pageData: JumboData = {
    title: "About",
    description: "Everything you want to know about this site",
  };

  constructor() {}

  ngOnInit() {}
}
