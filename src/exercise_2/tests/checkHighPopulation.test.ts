import { checkHighPopulation, countriesEuropeanUnion } from "../exercise_2";
describe("comparing population to value", () => {
  test("population is greater than the value shown", () => {
    const input = [
      {
        name: "Czech Republic",
        population: 23000,
        regionalBlocs: [{ acronym: "EU" }]
      },
      {
        name: "Belgium",
        population: 20000,
        regionalBlocs: [{ acronym: "EU" }]
      },
      { name: "Swiden", population: 34000, regionalBlocs: [{ acronym: "EU" }] }
    ];
    const output = true;
    const num = 10000;
    const countries = new countriesEuropeanUnion(input);

    expect(checkHighPopulation(countries, num)).toStrictEqual(output);
  });

  test("population is less than the value shown", () => {
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
      }
    ];
    const output = false;
    const num = 100000;
    const countries = new countriesEuropeanUnion(input);

    expect(checkHighPopulation(countries, num)).toStrictEqual(output);
  });
});
