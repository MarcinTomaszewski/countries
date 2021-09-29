import { checkChangesInCountries } from "../exercise_1";

describe("checking for changes in countries", () => {
  test("data not changed", () => {
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
    expect(checkChangesInCountries(currentData, prevData)).toStrictEqual(
      currentData
    );
  });

  test("data changed in one country", () => {
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

    expect(checkChangesInCountries(currentData, prevData)).toStrictEqual(
      prevData
    );
  });

  test("data changed in all countries", () => {
    const currentData = [
      { name: "Poland", population: 400 },
      { name: "England", population: 800 },
      { name: "Italy", population: 300 }
    ];
    const prevData = [
      { name: "Poland", population: 100 },
      { name: "England", population: 200 },
      { name: "Italy", population: 800 }
    ];

    expect(checkChangesInCountries(currentData, prevData)).toStrictEqual(
      prevData
    );
  });
});
