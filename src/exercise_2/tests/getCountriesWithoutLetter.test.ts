import { servicesCountryList } from "../../utils/servicesCountryList";
import { countryListForLeeter } from "./dataForTestExe2";
const { getCountriesWithoutLetter } = servicesCountryList;

describe('check countries do not contain letters', () => {
  test("country name not contains letter", () => {
    const letter = 'a';
    const countriesWithoutLetter = getCountriesWithoutLetter(countryListForLeeter, letter).every(country => !country.name.includes(letter));

    expect(countriesWithoutLetter).toBe(true);
  });

  test("country name not contains another letter", () => {
    const letter = 'b';
    const countriesWithoutLetter = getCountriesWithoutLetter(countryListForLeeter, letter).every(country => !country.name.includes(letter));

    expect(countriesWithoutLetter).toBe(true);
  });
})



