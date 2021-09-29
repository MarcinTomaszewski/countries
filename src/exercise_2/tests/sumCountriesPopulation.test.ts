import { countriesEuropeanUnion } from "../exercise_2";

describe("sum of the population of countries", () => {
  test("sum of the population of countries when there are more than 5", () => {
    const input = [
      {
        name: "Czech Republic",
        population: 900,
        regionalBlocs: [{ acronym: "EU" }]
      },
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
    const output = 16600;
    const countries = new countriesEuropeanUnion(input);

    expect(
      countries
        .europeanUnionCountries()
        .countriesWithoutLetterA()
        .sortByPopulation()
        .sumCountriesPopulation().result
    ).toStrictEqual(output);
  });

  test("sum of the population of countries when there are less than 5", () => {
    const input = [
      {
        name: "Czech Republic",
        population: 900,
        regionalBlocs: [{ acronym: "EU" }]
      },
      { name: "Belgium", population: 2000, regionalBlocs: [{ acronym: "EU" }] },
      { name: "Swiden", population: 3400, regionalBlocs: [{ acronym: "EU" }] }
    ];
    const output = 6300;
    const countries = new countriesEuropeanUnion(input);

    expect(
      countries
        .europeanUnionCountries()
        .countriesWithoutLetterA()
        .sortByPopulation()
        .sumCountriesPopulation().result
    ).toStrictEqual(output);
  });
});
