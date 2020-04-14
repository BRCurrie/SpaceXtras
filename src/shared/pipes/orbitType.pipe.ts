import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orbitType",
})
export class OrbitTypePipe implements PipeTransform {
  transform(value: string): string {
    let newValue: string;
    switch (value) {
      case "VLEO":
        return (newValue = "Very low Earth orbit");
      case "LEO":
        return "Low Earth orbit";
      case "ISS":
        return "International Space Station";
      case "PO":
        return "Polar orbit";
      case "GTO":
        return "Geostationary transfer orbit";
      case "ES-L1":
        return "Earth Sun Lagrange point 1";
      case "HCO":
        return "Heliocentric orbit";
      case "SSO":
        return "Sun-synchronous orbit";
      case "MEO":
        return "Medium Earth orbit";
      case "SO":
        return "Sun-synchronous orbit";
      case "TLI":
        return "Trans-lunar injection";
    }

    return newValue;
  }
}
//  Orbit types: VLEO, LEO, ISS, PO, GTO, ES-L1, HCO, SSO, MEO, SO, TLI
