import { countryNamesPopulaChange } from "../exercise_1";
const currentData = [
  { name: "Poland", population: 400 },
  { name: "England", population: 800 },
  { name: "Italy", population: 300 }
];
describe("population change in countries", () => {
  test("all countries have changed in population", () => {
    const prevData = [
      { name: "Poland", population: 100 },
      { name: "England", population: 100 },
      { name: "Italy", population: 100 }
    ];
    const countryListTest = countryNamesPopulaChange(currentData, prevData);
    const output = ["Poland", "England", "Italy"];
    expect(countryListTest).toContain("England");
    expect(countryListTest).toHaveLength(3);
    expect(countryListTest[countryListTest.length - 1]).toBe("Italy");
  });

  test("one country has changed in population", () => {
    const prevData = [
      { name: "Poland", population: 400 },
      { name: "England", population: 800 },
      { name: "Italy", population: 100 }
    ];

    expect(countryNamesPopulaChange(currentData, prevData)).toContain("Italy");
  });

  test("no country has changed in population", () => {
    const prevData = [
      { name: "Poland", population: 400 },
      { name: "England", population: 800 },
      { name: "Italy", population: 300 }
    ];

    expect(countryNamesPopulaChange(currentData, prevData)).toEqual([]);
  });
});
