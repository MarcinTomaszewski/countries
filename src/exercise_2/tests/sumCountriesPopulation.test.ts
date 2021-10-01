import { CountriesEuropeanUnion } from "../exercise_2";

describe("sum of the population of countries", () => {
  const countriesTest = [
    { name: "Czech", population: 900, regionalBlocs: [{ acronym: "EU" }] },
    { name: "Belgium", population: 2000, regionalBlocs: [{ acronym: "EU" }] },
    { name: "Swiden", population: 3400, regionalBlocs: [{ acronym: "EU" }] },
    { name: "Greece", population: 6400, regionalBlocs: [{ acronym: "EU" }] },
    {
      name: "Luxembourg",
      population: 1400,
      regionalBlocs: [{ acronym: "EU" }]
    },
    { name: "Cyprus", population: 3400, regionalBlocs: [{ acronym: "EU" }] }
  ];

  test("sum of the population of countries when there are more than 5", () => {
    const countries = new CountriesEuropeanUnion(countriesTest);
    const countryListTest = countries
      .europeanUnionCountries()
      .countriesWithoutLetterA()
      .sortByPopulation()
      .sumCountriesPopulation()
      .getSumPopulation();

    expect(countryListTest).toBe(16600);
  });

  test("sum of the population of countries when there are less than 5", () => {
    const input = [...countriesTest].slice(0, 3);
    const countries = new CountriesEuropeanUnion(input);
    const countryListTest = countries
      .europeanUnionCountries()
      .countriesWithoutLetterA()
      .sortByPopulation()
      .sumCountriesPopulation()
      .getSumPopulation();

    expect(countryListTest).toBe(6300);
  });
});
