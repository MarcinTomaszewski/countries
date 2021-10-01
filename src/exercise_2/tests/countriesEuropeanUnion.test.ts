import { CountriesEuropeanUnion } from "../exercise_2";
const countryListTest = [{ name: "Czech", population: 900, regionalBlocs: [{ acronym: "EU" }] }];

test("check if the object is an instance CountriesEuropeanUnion class", () => {
  const obj = new CountriesEuropeanUnion(countryListTest);

  expect(obj).toBeInstanceOf(CountriesEuropeanUnion);
});
