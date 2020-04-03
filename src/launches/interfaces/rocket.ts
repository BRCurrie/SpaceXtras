import { Cores } from "./cores";

// Extended by launch interface

export interface Rocket extends Cores {
  // extends cores, second_stage, fairings,
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: {
    cores: Cores[];
  };
  second_stage: {
    // extends payloads
    block: number;
    payloads: [
      {
        // extends orbit_params
        payload_id: string;
        norad_id: [];
        reused: boolean;
        customers: [];
        nationality: string;
        manufacturer: string;
        payload_type: string;
        payload_mass_kg: number | null;
        payload_mass_lbs: number | null;
        orbit: string;
        orbit_params: {
          reference_system: string;
          regime: string;
          longitude: null;
          semi_major_axis_km: null;
          eccentricity: null;
          periapsis_km: null;
          apoapsis_km: null;
          inclination_deg: null;
          period_min: null;
          lifespan_years: null;
          epoch: null;
          mean_motion: null;
          raan: null;
          arg_of_pericenter: null;
          mean_anomaly: null;
        };
      }
    ];
  };
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ship: string | null;
  };
}
