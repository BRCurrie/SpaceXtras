import { Location } from "./location";

// https://api.spacexdata.com/v3/landpads

export interface LandingPads extends Location {
  id: string;
  full_name: string;
  status: string;
  location: {};
  landing_type: string;
  attempted_landings: number;
  successful_landings: number;
  wikipedia: string;
  details: string;
}
