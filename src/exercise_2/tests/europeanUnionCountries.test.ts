import { CountriesEuropeanUnion } from "../exercise_2";

describe("check countries by belonging", () => {
  const countriesTest = [
    { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }] },
    { name: "USA", population: 1200, regionalBlocs: [{ acronym: "USA" }] },
    { name: "Italy", population: 2000, regionalBlocs: [{ acronym: "EU" }] },
    { name: "France", population: 3400, regionalBlocs: [{ acronym: "EU" }] },
    { name: "Egipt", population: 3400, regionalBlocs: [{ acronym: "TUE" }] },
    { name: "Chile", population: 2000 },
    { name: "Brazil", population: 3400 }
  ];

  test("search for countries belong to european union", () => {
    const countries = new CountriesEuropeanUnion(countriesTest);
    const countryListTest = countries
      .europeanUnionCountries()
      .getResultCountries();

    expect(countryListTest[1].regionalBlocs[0].acronym).toBe("EU");
    expect(countryListTest[0].name).toBe("Poland");
    expect(countryListTest[countryListTest.length - 1].name).toBe("France");
  });

  test("is there a property - regionalBlocs", () => {
    const countries = new CountriesEuropeanUnion(countriesTest);
    const countryListTest = countries
      .europeanUnionCountries()
      .getResultCountries();

    expect(countryListTest[0].name).toBe("Poland");
    expect(countryListTest[countryListTest.length - 1]).toHaveProperty(
      "regionalBlocs"
    );
  });

  test("not property - regionalBlocs for all", () => {
    const input = [
      { name: "Poland", population: 900 },
      { name: "USA", population: 1200 },
      { name: "Italy", population: 2000 },
      { name: "France", population: 3400 }
    ];

    const countries = new CountriesEuropeanUnion(input);
    const countryListTest = countries
      .europeanUnionCountries()
      .getResultCountries();

    expect(countryListTest).toHaveLength(0);
  });
});
