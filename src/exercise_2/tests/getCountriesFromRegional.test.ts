import { servicesCountryList } from "../../utils/servicesCountryList";
import { countryListForRegional } from './dataForTestExe2';
const { getCountriesFromRegional } = servicesCountryList;

describe("check countries by regional blocs", () => {
  test("search for countries belong to european union", () => {
    const regional = 'EU';
    const checkRegionalBlocs = getCountriesFromRegional(countryListForRegional, regional).every(country => country.regionalBlocs[0].acronym = regional);

    expect(checkRegionalBlocs).toBe(true);
  });

  test("search for countries belong to different region", () => {
    const regional = 'AU';
    const checkRegionalBlocs = getCountriesFromRegional(countryListForRegional, regional).every(country => country.regionalBlocs[0].acronym === regional);

    expect(checkRegionalBlocs).toBe(true);
  });

  test("is there a property - regionalBlocs", () => {
    const regional = 'EU';
    const checkRegionalBlocs = getCountriesFromRegional(countryListForRegional, regional).every(country => country.regionalBlocs);

    expect(checkRegionalBlocs).toBe(true);
  });

  test("not property - regionalBlocs for all", () => {
    const countriesWithoutRegionalBlocs = [...countryListForRegional].filter(country => !country.regionalBlocs).every(country => !country.regionalBlocs);

    expect(countriesWithoutRegionalBlocs).toBe(true);
  });
});
