import { checkHighProperty } from "../exercise_2";
import { servicesCountryList } from '../../utils/servicesCountryList';
import { countryListForCheck, servicesKeyForCheck } from './dataForTestExe2';

describe("comparing population to value", () => {

  test("population is greater than the value shown", () => {
    const servicesKeyTest = { ...servicesKeyForCheck };
    servicesKeyTest.border = 50_000;
    const countries = checkHighProperty(countryListForCheck, servicesCountryList, servicesKeyTest);
    expect(countries).toBe(true);
  });

  test("population is less than the value shown", () => {
    const servicesKeyTest = { ...servicesKeyForCheck };
    servicesKeyTest.border = 1_000_000;
    const countries = checkHighProperty(countryListForCheck, servicesCountryList, servicesKeyTest);

    expect(countries).toBe(false);
  });
});
