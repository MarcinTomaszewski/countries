import { servicesCountryList } from "../../utils/servicesCountryList";

const { sumByProperty } = servicesCountryList;

const countryList = [
  { name: "Czech", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 3000 },
  { name: "Belgium", population: 2000, regionalBlocs: [{ acronym: "EU" }], area: 5000 },
  { name: "Swiden", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 4000 },
  { name: "Greece", population: 6400, regionalBlocs: [{ acronym: "EU" }], area: 2300 },
  { name: "Luxembourg", population: 1400, regionalBlocs: [{ acronym: "EU" }], area: 980 },
  { name: "Cyprus", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 1100 }
];
describe("sum property of countries", () => {
  test("sum populations of selected countries", () => {
    const property = 'population';
    const selectedCountries = 5;
    const countries = sumByProperty(countryList, selectedCountries, property);
    const sum = countryList.slice(0, selectedCountries).map(country => country[property]).reduce((a, b) => a + b);

    expect(countries).toBe(sum);
  });

  test("sum populations of another selected countries", () => {
    const property = 'population';
    const selectedCountries = 3;
    const countries = sumByProperty(countryList, selectedCountries, property);
    const sum = countryList.slice(0, selectedCountries).map(country => country[property]).reduce((a, b) => a + b);

    expect(countries).toBe(sum);
  });

  test("sum area of selected countries", () => {
    const property = 'area';
    const selectedCountries = 5;
    const countries = sumByProperty(countryList, selectedCountries, property);
    const sum = countryList.slice(0, selectedCountries).map(country => country[property]).reduce((a, b) => a + b);

    expect(countries).toBe(sum);
  });
});
