import { servicesCountryList } from "../../utils/servicesCountryList";
import { countryListForSort } from "./dataForTestExe2";
const { sortByProperty } = servicesCountryList;

const firstCountries: [string, string][] = [['population', 'Swiden'], ['area', 'Belgium']];
const lastCountries: [string, string][] = [['population', 'Czech'], ['area', 'Czech']];

describe('sort countries by propety', () => {
  test.each(firstCountries)(
    'Given property %p as argument, return first country name %p', (property, expected) => {
      const result = sortByProperty(countryListForSort, property);
      expect(result[0].name).toBe(expected);
    }
  )

  test.each(lastCountries)(
    'Given property %p as argument, return last country name %p', (property, expected) => {
      const result = sortByProperty(countryListForSort, property);
      //Funkcja at() nie działa. Pewnie trzeba pogrzebać w konfiguracji. 
      //expect(result.at(-1).name).toBe(expectedResult);
      expect(result[result.length - 1].name).toBe(expected);
    }
  )

  test('length array should be the same as countryList', () => {
    const property = 'population';
    const result = sortByProperty(countryListForSort, property);
    expect(result).toHaveLength(countryListForSort.length);
  })
});
