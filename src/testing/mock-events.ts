import { History } from "src/timeline/interfaces/history";

export const mockEvent: History = {
  id: 1,
  title: "TITLE",
  event_date_utc: "2018-02-06T20:45:00.000Z",
  event_date_unix: 2,
  flight_number: 3,
  details: "DETAILS",
  links: {
    reddit: "REDDIT",
    article: "ARTICLE",
    wikipedia: "WIKIPEDIA",
  },
};
