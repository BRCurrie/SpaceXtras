import { trigger, animate, transition, style } from "@angular/animations";

export const routerAnimation = trigger("routeAnimations", [
  transition("* => *", [
    style({ opacity: 0 }),
    animate("1.2s", style({ opacity: 1 })),
  ]),
]);
