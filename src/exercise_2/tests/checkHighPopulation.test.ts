import { checkHighPopulation, CountriesEuropeanUnion } from "../exercise_2";

describe("comparing population to value", () => {
  const countryListTest = [
    { name: "Czech", population: 23000, regionalBlocs: [{ acronym: "EU" }] },
    { name: "Belgium", population: 20000, regionalBlocs: [{ acronym: "EU" }] },
    { name: "Swiden", population: 34000, regionalBlocs: [{ acronym: "EU" }] },
    { name: "Greece", population: 6400, regionalBlocs: [{ acronym: "EU" }] }
  ];

  test("population is greater than the value shown", () => {
    const num = 10000;
    const countries = new CountriesEuropeanUnion(countryListTest);

    expect(checkHighPopulation(countries, num)).toBe(true);
  });

  test("population is less than the value shown", () => {
    const num = 100000;
    const countries = new CountriesEuropeanUnion(countryListTest);

    expect(checkHighPopulation(countries, num)).toBe(false);
  });
});
