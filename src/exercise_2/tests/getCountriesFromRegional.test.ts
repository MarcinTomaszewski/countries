import { servicesCountryList } from "../../utils/servicesCountryList";
const { getCountriesFromRegional } = servicesCountryList;

const countryList = [
  { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 5000 },
  { name: "USA", population: 1200, regionalBlocs: [{ acronym: "USA" }], area: 11000 },
  { name: "Italy", population: 2000, regionalBlocs: [{ acronym: "EU" }], area: 15000 },
  { name: "France", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 8000 },
  { name: "Egipt", population: 3400, regionalBlocs: [{ acronym: "TUE" }], area: 16809 },
  { name: "Chile", population: 2000, area: 20000 },
  { name: "Brazil", population: 3400, area: 30000 }
];

describe("check countries by regional blocs", () => {
  test("search for countries belong to european union", () => {
    const regional = 'EU';
    const checkRegionalBlocs = getCountriesFromRegional(countryList, regional).every(country => country.regionalBlocs[0].acronym = regional);

    expect(checkRegionalBlocs).toBe(true);
  });

  test("search for countries belong to different region", () => {
    const regional = 'AU';
    const checkRegionalBlocs = getCountriesFromRegional(countryList, regional).every(country => country.regionalBlocs[0].acronym === regional);

    expect(checkRegionalBlocs).toBe(true);
  });

  test("is there a property - regionalBlocs", () => {
    const regional = 'EU';
    const checkRegionalBlocs = getCountriesFromRegional(countryList, regional).every(country => country.regionalBlocs);

    expect(checkRegionalBlocs).toBe(true);
  });

  test("not property - regionalBlocs for all", () => {
    const countriesWithoutRegionalBlocs = [...countryList].filter(country => !country.regionalBlocs).every(country => !country.regionalBlocs);

    expect(countriesWithoutRegionalBlocs).toBe(true);
  });
});
