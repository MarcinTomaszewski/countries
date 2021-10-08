import { servicesCountryList } from "../../utils/servicesCountryList";
import { countryListForSum } from "./dataForTestExe2";
const { sumByProperty } = servicesCountryList;

const countries: [number, string, number][] = [[5, 'population', 14100], [3, 'population', 6300], [5, 'area', 15280]];

test.each(countries)(
  'Given number of countries: %p and property: %p as arguments, return sum property %p',
  (numCountries, property, expectedResult) => {
    const result = sumByProperty(countryListForSum, numCountries, property);
    expect(result).toBe(expectedResult);
  }
)
