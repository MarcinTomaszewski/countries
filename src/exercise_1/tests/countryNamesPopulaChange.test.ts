import { countryNamesPopulaChange } from "../exercise_1";
import { currentDataChangeNames } from "./dataForTestExe1";
describe("population change in countries", () => {
  test("all countries have changed in population", () => {
    const prevData = [
      { name: "Poland", population: 100, area: 12500 },
      { name: "England", population: 100, area: 23600 },
      { name: "Italy", population: 100, area: 18500 }
    ];
    const countryListTest = countryNamesPopulaChange(currentDataChangeNames, prevData);

    expect(countryListTest).toContain("England");
    expect(countryListTest).toHaveLength(3);
    expect(countryListTest[countryListTest.length - 1]).toBe("Italy");
  });

  test("one country has changed in population", () => {
    const prevData = [
      { name: "Poland", population: 400, area: 12500 },
      { name: "England", population: 800, area: 23600 },
      { name: "Italy", population: 100, area: 18500 }
    ];

    expect(countryNamesPopulaChange(currentDataChangeNames, prevData)).toContain("Italy");
  });

  test("no country has changed in population", () => {
    const prevData = [
      { name: "Poland", population: 400, area: 12500 },
      { name: "England", population: 800, area: 23600 },
      { name: "Italy", population: 300, area: 18500 }
    ];

    expect(countryNamesPopulaChange(currentDataChangeNames, prevData)).toEqual([]);
  });
});
