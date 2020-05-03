// Used by multiple modules
// Launches - all launches
// https://api.spacexdata.com/v3/launches
// Dashboard - next launch
// https://api.spacexdata.com/v3/launches/next

export interface Launch {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: number;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: {
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
      };
    };
    second_stage: {
      block: number;
      payloads: [
        {
          payload_id: string;
          norad_id: number[];
          cap_serial: string | null;

          reused: boolean;
          customers: string[];
          nationality: string;
          manufacturer: string;
          payload_type: string;
          payload_mass_kg: number | null;
          payload_mass_lbs: number | null;
          orbit: string;
          orbit_params: {
            reference_system: string;
            regime: string;
            longitude: number | null;
            semi_major_axis_km: number | null;
            eccentricity: number | null;
            periapsis_km: number | null;
            apoapsis_km: number | null;
            inclination_deg: number | null;
            period_min: number | null;
            lifespan_years: number | null;
            epoch: string | null;
            mean_motion: number | null;
            raan: number | null;
            arg_of_pericenter: number | null;
            mean_anomaly: number | null;
          };
          mass_returned_kg: number | null;
          mass_returned_lbs: number | null;
          flight_time_sec: number | null;
          cargo_manifest: string | null;
        }
      ];
    };
    fairings: {
      reused: boolean;
      recovery_attempt: boolean;
      recovered: boolean;
      ship: string | null;
    };
  };
  ships: string[];
  telemetry: {
    flight_club: string | null;
  };
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  launch_success: boolean | null;
  launch_failure_details: {
    time: number | null;
    altitude: number | null;
    reason: string | null;
  };
  links: {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: string | null;
    reddit_launch: string | null;
    reddit_recovery: string | null;
    reddit_media: string | null;
    presskit: string | null;

    article_link: string;
    wikipedia: string;
    video_link: string;
    youtube_id: string | null;
    flickr_images: string[];
  };
  details: string;
  upcoming: boolean;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  timeline: {
    webcast_liftoff: number | null;
    rp1_loading: number | null;
    stage1_lox_loading: number | null;
    stage2_lox_loading: number | null;
    engine_chill: number | null;
    prelaunch_checks: number | null;
    propellant_pressurization: number | null;
    go_for_launch: number | null;
    ignition: number | null;
    liftoff: number | null;
    maxq: number | null;
    meco: number | null;
    stage_sep: number | null;
    second_stage_ignition: number | null;
    first_stage_boostback_burn: number | null;
    first_stage_landing: number | null;
    dragon_separation: number | null;
    dragon_solar_deploy: number | null;
    dragon_bay_door_deploy: number | null;
  };
  crew: string | null;
}
