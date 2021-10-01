import { CountriesEuropeanUnion } from "../exercise_2";

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

  const countries = new CountriesEuropeanUnion(input);
  const countryListTest = countries
    .europeanUnionCountries()
    .countriesWithoutLetterA()
    .getResultCountries();

  expect(countryListTest[0].name).toBe("Belgium");
  expect(countryListTest).toHaveLength(1);
});