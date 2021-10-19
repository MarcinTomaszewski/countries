import { saveDataCountryInObj, createObj } from "../exercise_3";
import { countriesEmptyObj, country, countryWithoutCurrency } from "./mockValues";


describe('checking that the data is saved correctly', () => {
  test('check that the data is saved correctly', () => {
    saveDataCountryInObj(countriesEmptyObj, country, 'EU');

    expect(countriesEmptyObj.EU.countries).toContain('Polska');
    expect(countriesEmptyObj.EU.population).toBe(900);
    expect(countriesEmptyObj.EU.area).toBe(12980);
    expect(countriesEmptyObj.EU.currencies).toContain('złoty');
    expect(countriesEmptyObj.EU.languages.pl.countries).toContain('POL');
    expect(countriesEmptyObj.EU.languages.pl.population).toBe(900);
    expect(countriesEmptyObj.EU.languages.pl.area).toBe(12980);
    expect(countriesEmptyObj.EU.languages.pl.name).toBe('polski');
  })
})