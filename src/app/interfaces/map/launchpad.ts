import { Location } from "./location";

// https://api.spacexdata.com/v3/launchpads

export interface Launchpad extends Location {
  id: number;
  status: string | null;
  location: Location;
  vehicles_launched: [];
  attempted_launches: number;
  successful_launches: number;
  wikipedia: string | null;
  details: string | null;
  site_id: string | null;
  site_name_long: string | null;
}
