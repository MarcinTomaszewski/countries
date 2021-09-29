import { countriesEuropeanUnion } from "../exercise_2";

test("sort countries by population size so that the largest is first", () => {
  const input = [
    {
      name: "Czech Republic",
      population: 900,
      regionalBlocs: [{ acronym: "EU" }]
    },
    { name: "Belgium", population: 2000, regionalBlocs: [{ acronym: "EU" }] },
    { name: "Swiden", population: 3400, regionalBlocs: [{ acronym: "EU" }] }
  ];
  const output = [
    { name: "Swiden", population: 3400, regionalBlocs: [{ acronym: "EU" }] },
    { name: "Belgium", population: 2000, regionalBlocs: [{ acronym: "EU" }] },
    {
      name: "Czech Republic",
      population: 900,
      regionalBlocs: [{ acronym: "EU" }]
    }
  ];
  const countries = new countriesEuropeanUnion(input);

  expect(
    countries
      .europeanUnionCountries()
      .countriesWithoutLetterA()
      .sortByPopulation().result
  ).toStrictEqual(output);
});
