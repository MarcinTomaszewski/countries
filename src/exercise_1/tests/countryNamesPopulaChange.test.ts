import { countryNamesPopulaChange } from "../exercise_1";
import { currentDataChangeNames } from "./dataForTestExe1";
describe("population change in countries", () => {
  test("all countries have changed in population", () => {
    const prevData = [
      { name: "Poland", population: 100, area: 12500, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'pl' },
      { name: "England", population: 100, area: 23600, nativeName: 'England', currencies: [{ name: 'pound' }], languages: [{ iso639_1: 'en', nativeName: 'english' }], alpha3Code: 'en' },
      { name: "Italy", population: 100, area: 18500, nativeName: 'Italia', currencies: [{ name: 'euro' }], languages: [{ iso639_1: 'it', nativeName: 'italiano' }], alpha3Code: 'it' }
    ];
    const countryListTest = countryNamesPopulaChange(currentDataChangeNames, prevData);

    expect(countryListTest).toContain("England");
    expect(countryListTest).toHaveLength(3);
    expect(countryListTest[countryListTest.length - 1]).toBe("Italy");
  });

  test("one country has changed in population", () => {
    const prevData = [
      { name: "Poland", population: 400, area: 12500, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'pl' },
      { name: "England", population: 800, area: 23600, nativeName: 'England', currencies: [{ name: 'pound' }], languages: [{ iso639_1: 'en', nativeName: 'english' }], alpha3Code: 'en' },
      { name: "Italy", population: 100, area: 18500, nativeName: 'Italia', currencies: [{ name: 'euro' }], languages: [{ iso639_1: 'it', nativeName: 'italiano' }], alpha3Code: 'it' }
    ];

    expect(countryNamesPopulaChange(currentDataChangeNames, prevData)).toContain("Italy");
  });

  test("no country has changed in population", () => {
    const prevData = [
      { name: "Poland", population: 400, area: 12500, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'pl' },
      { name: "England", population: 800, area: 23600, nativeName: 'England', currencies: [{ name: 'pound' }], languages: [{ iso639_1: 'en', nativeName: 'english' }], alpha3Code: 'en' },
      { name: "Italy", population: 300, area: 18500, nativeName: 'Italia', currencies: [{ name: 'euro' }], languages: [{ iso639_1: 'it', nativeName: 'italiano' }], alpha3Code: 'it' }
    ];

    expect(countryNamesPopulaChange(currentDataChangeNames, prevData)).toEqual([]);
  });
});
