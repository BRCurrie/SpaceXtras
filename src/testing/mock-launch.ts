import { Launch } from "src/shared/interfaces/launch";

export const mockLaunch: Launch = {
  flight_number: 41,
  mission_name: "CRS-11",
  mission_id: ["EE86F74"],
  launch_year: 2017,
  launch_date_unix: 1496524020,
  launch_date_utc: "2017-06-03T21:07:00.000Z",
  launch_date_local: "2017-06-03T17:07:00-04:00",
  is_tentative: false,
  tentative_max_precision: "hour",
  tbd: false,
  rocket: {
    rocket_id: "falcon9",
    rocket_name: "Falcon 9",
    rocket_type: "FT",
    first_stage: {
      cores: {
        core_serial: "B1035",
        flight: 1,
        block: 3,
        gridfins: true,
        legs: true,
        reused: false,
        land_success: true,
        landing_intent: true,
        landing_type: "RTLS",
        landing_vehicle: "LZ-1",
      },
    },
    second_stage: {
      block: 3,
      payloads: [
        {
          payload_id: "CRS-11",
          norad_id: [42744],
          cap_serial: "C106",
          reused: false,
          customers: ["NASA (CRS)"],
          nationality: "United States",
          manufacturer: "SpaceX",
          payload_type: "Dragon 1.1",
          payload_mass_kg: 2708,
          payload_mass_lbs: 5970,
          orbit: "ISS",
          orbit_params: {
            reference_system: "geocentric",
            regime: "low-earth",
            longitude: null,
            semi_major_axis_km: 6657.963,
            eccentricity: 0.0113366,
            periapsis_km: 204.35,
            apoapsis_km: 355.307,
            inclination_deg: 51.639,
            period_min: 90.109,
            lifespan_years: null,
            epoch: "2017-06-03T23:01:19.000Z",
            mean_motion: 15.9805087,
            raan: 104.5218,
            arg_of_pericenter: 45.1464,
            mean_anomaly: 62.5836,
          },
          mass_returned_kg: 1900,
          mass_returned_lbs: 4100,
          flight_time_sec: 2559840,
          cargo_manifest:
            "https://www.nasa.gov/sites/default/files/atoms/files/spacex_crs-11_mission_overview.pdf",
        },
      ],
    },
    fairings: null,
  },
  ships: ["NRCQUEST"],
  telemetry: {
    flight_club: "https://www.flightclub.io/results/?code=CR11",
  },
  launch_site: {
    site_id: "ksc_lc_39a",
    site_name: "KSC LC 39A",
    site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
  },
  launch_success: true,
  launch_failure_details: {
    time: null,
    altitude: null,
    reason: null,
  },
  links: {
    mission_patch: "https://images2.imgbox.com/4b/88/4irzX449_o.png",
    mission_patch_small: "https://images2.imgbox.com/e8/33/RV791zv9_o.png",
    reddit_campaign: "https://www.reddit.com/r/spacex/comments/68ul58/",
    reddit_launch: "https://www.reddit.com/r/spacex/comments/6ektkt/",
    reddit_recovery: null,
    reddit_media: "https://www.reddit.com/r/spacex/comments/6emlzr/",
    presskit: "http://www.spacex.com/sites/spacex/files/crs11presskit.pdf",
    article_link:
      "https://spaceflightnow.com/2017/06/03/reused-dragon-cargo-capsule-launched-on-journey-to-space-station/",
    wikipedia: "https://en.wikipedia.org/wiki/SpaceX_CRS-11",
    video_link: "https://www.youtube.com/watch?v=JuZBOUMsYws",
    youtube_id: "JuZBOUMsYws",
    flickr_images: [
      "https://farm5.staticflickr.com/4210/34696326760_cee662ef1f_o.jpg",
      "https://farm5.staticflickr.com/4279/34239858024_64795724c9_o.jpg",
      "https://farm5.staticflickr.com/4250/35043398436_3ceaa0098a_o.jpg",
      "https://farm5.staticflickr.com/4223/34272083563_f52e5bfffe_o.jpg",
      "https://farm5.staticflickr.com/4219/34918571502_7cf66854f7_o.jpg",
      "https://farm5.staticflickr.com/4252/34918568732_4efe0885de_o.jpg",
      "https://farm5.staticflickr.com/4264/34272065153_cfd8899f3e_o.jpg",
      "https://farm5.staticflickr.com/4284/34948230531_e76b7560c9_o.jpg",
      "https://farm5.staticflickr.com/4280/35078830875_afbd41c675_o.jpg",
      "https://farm5.staticflickr.com/4280/34268361083_71fc70ff1a_o.jpg",
      "https://farm5.staticflickr.com/4199/35038651646_93d0339269_o.jpg",
      "https://farm5.staticflickr.com/4227/34223076793_4abe7e74d6_o.jpg",
    ],
  },
  details:
    "This mission delivered the Neutron Star Interior Composition Explorer (NICER) to the ISS, along with the MUSES Earth imaging platform and ROSA solar array. For the first time, this mission launched a refurbished Dragon capsule, serial number C106 which first flew in September 2014 on the CRS-4 mission. Originally scheduled to launch on June 1, but was scrubbed due to inclement weather.",
  upcoming: false,
  static_fire_date_utc: "2017-05-28T16:00:00.000Z",
  static_fire_date_unix: 1495987200,
  timeline: {
    webcast_liftoff: 1199,
    rp1_loading: -2100,
    stage1_lox_loading: -2100,
    stage2_lox_loading: -960,
    engine_chill: -420,
    prelaunch_checks: -60,
    propellant_pressurization: -60,
    go_for_launch: -45,
    ignition: -3,
    liftoff: 0,
    maxq: 78,
    meco: 142,
    stage_sep: 145,
    second_stage_ignition: 152,
    first_stage_boostback_burn: 158,
    first_stage_landing: 447,
    dragon_separation: 620,
    dragon_solar_deploy: 720,
    dragon_bay_door_deploy: 8400,
  },
  crew: null,
};
