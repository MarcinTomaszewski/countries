import { CountriesEuropeanUnion } from "../exercise_2";

test("sort countries by population size so that the largest is first", () => {
  const countriesTest = [
    { name: "Czech", population: 900, regionalBlocs: [{ acronym: "EU" }] },
    { name: "Belgium", population: 2000, regionalBlocs: [{ acronym: "EU" }] },
    { name: "Swiden", population: 3400, regionalBlocs: [{ acronym: "EU" }] }
  ];

  const countries = new CountriesEuropeanUnion(countriesTest);
  const countryListTest = countries
    .europeanUnionCountries()
    .countriesWithoutLetterA()
    .sortByPopulation()
    .getResultCountries();

  expect(countryListTest[0].name).toBe("Swiden");
  expect(countryListTest).toHaveLength(countriesTest.length);
  expect(countryListTest[1].population).toBe(2000);
  expect(countryListTest[countryListTest.length - 1].name).toBe("Czech");
});
