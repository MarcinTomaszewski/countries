import { checkHighProperty } from "../exercise_2";
import { servicesCountryList } from '../../utils/servicesCountryList';

const countryList = {
  time: 10,
  countryList: [
    { name: "Czech", population: 23000, regionalBlocs: [{ acronym: "EU" }], area: 1000 },
    { name: "Belgium", population: 20000, regionalBlocs: [{ acronym: "EU" }], area: 2560 },
    { name: "Swiden", population: 34000, regionalBlocs: [{ acronym: "EU" }], area: 3100 },
    { name: "Greece", population: 6400, regionalBlocs: [{ acronym: "EU" }], area: 4800 }
  ]
};

const servicesKey = {
  regional: 'EU',
  letter: 'a',
  property: 'population',
  numCountries: 5,
  border: 50_000
}

describe("comparing population to value", () => {

  test("population is greater than the value shown", () => {
    const countries = checkHighProperty(countryList, servicesCountryList, servicesKey);
    expect(countries).toBe(true);
  });

  test("population is less than the value shown", () => {
    const servicesKeyTest = { ...servicesKey };
    servicesKeyTest.border = 1_000_000;
    const countries = checkHighProperty(countryList, servicesCountryList, servicesKeyTest);

    expect(countries).toBe(false);
  });
});
