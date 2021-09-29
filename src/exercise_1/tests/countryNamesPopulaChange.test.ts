import { countryNamesPopulaChange } from "../exercise_1";

describe("population change in countries", () => {
  test("all countries have changed in population", () => {
    const currentData = [
      { name: "Poland", population: 400 },
      { name: "England", population: 800 },
      { name: "Italy", population: 300 }
    ];
    const prevData = [
      { name: "Poland", population: 100 },
      { name: "England", population: 100 },
      { name: "Italy", population: 100 }
    ];
    const output = ["Poland", "England", "Italy"];
    expect(countryNamesPopulaChange(currentData, prevData)).toStrictEqual(
      output
    );
  });

  test("one country has changed in population", () => {
    const currentData = [
      { name: "Poland", population: 400 },
      { name: "England", population: 800 },
      { name: "Italy", population: 300 }
    ];
    const prevData = [
      { name: "Poland", population: 400 },
      { name: "England", population: 800 },
      { name: "Italy", population: 100 }
    ];
    const output = ["Italy"];
    expect(countryNamesPopulaChange(currentData, prevData)).toStrictEqual(
      output
    );
  });

  test("no country has changed in population", () => {
    const currentData = [
      { name: "Poland", population: 400 },
      { name: "England", population: 800 },
      { name: "Italy", population: 300 }
    ];
    const prevData = [
      { name: "Poland", population: 400 },
      { name: "England", population: 800 },
      { name: "Italy", population: 300 }
    ];
    const output: string[] = [];
    expect(countryNamesPopulaChange(currentData, prevData)).toStrictEqual(
      output
    );
  });
});
