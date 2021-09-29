import { Constants } from "../types";

export const constants: Constants = {
  COUNTRY_KEY: "countryList",
  TIME_KEY: "time",
  API_URL: "https://restcountries.com/v2/all",
  TIME_SEVEN_DAYS: 604800000,
  CURRENT_TIME: new Date().getTime(),
  BORDER_POPULATION: 500_000_000
};
