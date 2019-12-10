import { Missions } from "./missions";

// https://api.spacexdata.com/v3/capsules

export interface Capsules extends Missions {
  capsule_serial: string;
  capsule_id: string;
  status: string; // active
  original_launch: string;
  original_launch_unix: number;
  missions: [];
  landings: number;
  type: string;
  details: null;
  reuse_count: 0;
}
