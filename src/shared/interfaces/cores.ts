// Extended by Rocket interface

export interface Cores {
  core_serial: string;
  flight: number;
  block: number | null;
  gridfins: boolean;
  legs: boolean;
  reused: false;
  land_success: boolean | null;
  landing_intent: boolean | null;
  landing_type: string | null;
  landing_vehicle: string | null;
}
