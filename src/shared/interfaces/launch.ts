import { Rocket } from "./rocket";

// Used by multiple modules
// Launches - all launches
// https://api.spacexdata.com/v3/launches
// Dashboard - next launch
// https://api.spacexdata.com/v3/launches/next

// Figure out why so many are just null
export interface Launch extends Rocket {
  // extends rocket, ships, launch_site, launch_success, links, details
  flight_number: number;
  mission_name: string;
  mission_id: [];
  launch_year: number;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  rocket: Rocket[];
  ships: [];
  telemetry: {
    flight_club: null;
  };
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  launch_success: boolean | null;
  launch_failure_details: {
    time: number;
    altitude: number;
    reason: string;
  };
  links: {
    mission_patch: string;
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
    flickr_images: [];
  };
  details: string;
  upcoming: boolean;
  static_fire_date_utc: null;
  static_fire_date_unix: null;
  timeline: {
    webcast_liftoff: number | null;
  };
  crew: null;
}
