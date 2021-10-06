import { servicesCountryList } from "../../utils/servicesCountryList";

const { getCountriesWithoutLetter } = servicesCountryList;

const countryList = [
  { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 12980 },
  { name: "Belgium", population: 1200, regionalBlocs: [{ acronym: "EU" }], area: 25879 },
  { name: "Italy", population: 2000, regionalBlocs: [{ acronym: "EU" }], area: 12387 },
  { name: "France", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 23900 }
];
describe('check countries do not contain letters', () => {
  test("country name not contains letter", () => {
    const letter = 'a';
    const countriesWithoutLetter = getCountriesWithoutLetter(countryList, letter).every(country => !country.name.includes(letter));

    expect(countriesWithoutLetter).toBe(true);
  });

  test("country name not contains another letter", () => {
    const letter = 'b';
    const countriesWithoutLetter = getCountriesWithoutLetter(countryList, letter).every(country => !country.name.includes(letter));

    expect(countriesWithoutLetter).toBe(true);
  });
})



