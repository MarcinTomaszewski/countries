import { CountryList, EuropeUnionCountries } from "../types";
export class CountriesEuropeanUnion implements EuropeUnionCountries {
  constructor(private countryList: CountryList[]) { }

  #result: CountryList[] = [];

  get getResult() {
    return this.#result;
  }
  europeanUnionCountries(region: string) {
    this.#result = this.countryList.filter(
      (country) =>
        country.regionalBlocs && country.regionalBlocs[0].acronym === region
    );
    return this;
  };
  countriesWithoutLetterA(letter: string) {
    this.#result = this.#result.filter(
      (country: CountryList) => !country.name.includes(letter)
    );
    return this;
  };
  sortByPopulation(property: string) {
    this.#result = this.#result.sort(
      (a: CountryList, b: CountryList) => b[property] - a[property]
    );
    return this;
  };
  sumCountriesPopulation(property: string): number {
    const sumPopulation = this.#result
      .slice(0, 5)
      .map((country: CountryList) => country[property])
      .reduce((a: number, b: number) => a + b);
    return sumPopulation;
  };
}

export const checkHighPopulation = (
  obj: EuropeUnionCountries,
  num: number
): boolean => {
  const population: number = obj
    .europeanUnionCountries('EU')
    .countriesWithoutLetterA('a')
    .sortByPopulation('population')
    .sumCountriesPopulation('population');

  return population > num;
};
