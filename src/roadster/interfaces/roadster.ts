import { Injectable } from "@angular/core";

export interface Adapter<RoadsterModel> {
  adapt(data: any): RoadsterModel;
}

@Injectable({
  providedIn: "root",
})
export class RoadsterAdapter implements Adapter<RoadsterModel> {
  adapt(data: any): RoadsterModel {
    return new RoadsterModel(
      data.name,
      data.launch_date_utc,
      data.launch_mass_lbs,
      data.period_days,
      data.speed_mph,
      data.earth_distance_mi,
      data.mars_distance_mi,
      data.details
    );
  }
}

export class RoadsterModel {
  constructor(
    public name: string,
    public launch_date_utc: string,
    public launch_mass_lbs: number,
    public period_days: number,
    public speed_mph: number,
    public earth_distance_mi: number,
    public mars_distance_mi: number,
    public details: string
  ) {}
}

export interface Roadster {
  name: string;
  launch_date_utc: string;
  launch_date_unix: number;
  launch_mass_kg: number;
  launch_mass_lbs: number;
  norad_id: number;
  epoch_jd: number;
  orbit_type: string;
  apoapsis_au: number;
  periapsis_au: number;
  semi_major_axis_au: number;
  eccentricity: number;
  inclination: number;
  longitude: number;
  periapsis_arg: number;
  period_days: number;
  speed_kph: number;
  speed_mph: number;
  earth_distance_km: number;
  earth_distance_mi: number;
  mars_distance_km: number;
  mars_distance_mi: number;
  wikipedia: string;
  details: string;
}
