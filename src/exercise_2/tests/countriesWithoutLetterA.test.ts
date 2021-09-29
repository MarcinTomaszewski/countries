import { countriesEuropeanUnion } from "../exercise_2";

test("country name not contains letter a", () => {
  const input = [
    { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }] },
    {
      name: "Belgium",
      population: 1200,
      regionalBlocs: [{ acronym: "EU" }]
    },
    { name: "Italy", population: 2000, regionalBlocs: [{ acronym: "EU" }] },
    { name: "France", population: 3400, regionalBlocs: [{ acronym: "EU" }] }
  ];
  const output = [
    {
      name: "Belgium",
      population: 1200,
      regionalBlocs: [{ acronym: "EU" }]
    }
  ];
  const countries = new countriesEuropeanUnion(input);

  expect(
    countries.europeanUnionCountries().countriesWithoutLetterA().result
  ).toEqual(output);
});
