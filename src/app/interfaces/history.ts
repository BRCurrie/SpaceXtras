// https://api.spacexdata.com/v3/history

export interface History {
  id: number;
  title: string | null;
  event_date_utc: string | null;
  event_date_unix: number;
  flight_number: number;
  details: string | null;
  links: {
    reddit: string | null;
    article: string | null;
    wikipedia: string | null;
  };
}
