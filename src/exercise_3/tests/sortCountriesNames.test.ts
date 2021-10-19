import { sortCountriesNames } from "../exercise_3";
import { countriesTest } from "./mockValues";

const firstCountries: [string, string][] = [['EU', 'България'], ['AU', '‏ليبيا'], ['NAFTA', 'United States'], ['other', 'Црна Гора']];

const lastCountries: [string, string][] = [['EU', 'België'], ['AU', 'Angola'], ['NAFTA', 'Canada'], ['other', 'Schweiz']];

test.each(firstCountries)('Given key %p return first country name %p', (key, expected) => {
  sortCountriesNames(countriesTest);
  expect(countriesTest[key].countries[0]).toBe(expected);
})

test.each(lastCountries)('Given key %p return last country name %p', (key, expected) => {
  sortCountriesNames(countriesTest);
  // funkcja at() nie działa
  expect(countriesTest[key].countries[countriesTest[key].countries.length - 1]).toBe(expected);
})

