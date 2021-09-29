import { CountryList } from "types";
import { countriesEuropeanUnion } from "../exercise_2";

describe("check countries by belonging", () => {
  test("search for countries belong to european union", () => {
    const input = [
      { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }] },
      { name: "USA", population: 1200, regionalBlocs: [{ acronym: "USA" }] },
      { name: "Italy", population: 2000, regionalBlocs: [{ acronym: "EU" }] },
      { name: "France", population: 3400, regionalBlocs: [{ acronym: "EU" }] }
    ];
    const output = [
      { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }] },
      { name: "Italy", population: 2000, regionalBlocs: [{ acronym: "EU" }] },
      { name: "France", population: 3400, regionalBlocs: [{ acronym: "EU" }] }
    ];
    const countries = new countriesEuropeanUnion(input);

    expect(countries.europeanUnionCountries().result).toStrictEqual(output);
  });

  test("is there a property - regionalBlocs", () => {
    const input = [
      { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }] },
      { name: "USA", population: 1200 },
      { name: "Italy", population: 2000 },
      { name: "France", population: 3400, regionalBlocs: [{ acronym: "EU" }] }
    ];
    const output = [
      { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }] },
      { name: "France", population: 3400, regionalBlocs: [{ acronym: "EU" }] }
    ];
    const countries = new countriesEuropeanUnion(input);
    expect(countries.europeanUnionCountries().result).toStrictEqual(output);
  });

  test("not property - regionalBlocs for all", () => {
    const input = [
      { name: "Poland", population: 900 },
      { name: "USA", population: 1200 },
      { name: "Italy", population: 2000 },
      { name: "France", population: 3400 }
    ];
    const output: CountryList[] = [];
    const countries = new countriesEuropeanUnion(input);
    expect(countries.europeanUnionCountries().result).toStrictEqual(output);
  });
});
