import { checkChangesInCountries } from "../exercise_1";
import { currentDataCheckChanges } from "./dataForTestExe1";
describe("checking for changes in countries", () => {
  test("data not changed", () => {
    const prevData = [
      { name: "Poland", population: 400, area: 24700 },
      { name: "England", population: 800, area: 35600 },
      { name: "Italy", population: 300, area: 14598 }
    ];
    expect(checkChangesInCountries(currentDataCheckChanges, prevData)).toStrictEqual(
      currentDataCheckChanges
    );
  });

  test("data changed in one country", () => {
    const prevData = [
      { name: "Poland", population: 400, area: 24700 },
      { name: "England", population: 800, area: 35600 },
      { name: "Italy", population: 100, area: 14598 }
    ];

    expect(checkChangesInCountries(currentDataCheckChanges, prevData)).toStrictEqual(
      prevData
    );
  });

  test("data changed in all countries", () => {
    const prevData = [
      { name: "Poland", population: 100, area: 24700 },
      { name: "England", population: 200, area: 35600 },
      { name: "Italy", population: 800, area: 14598 }
    ];

    expect(checkChangesInCountries(currentDataCheckChanges, prevData)).toStrictEqual(
      prevData
    );
  });
});
