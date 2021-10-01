import { CountryList, EuropeUnionCountries } from "../types";

export class CountriesEuropeanUnion implements EuropeUnionCountries {
  constructor(private countryList: CountryList[]) { }

  result: CountryList[] = [];
  sumPopulation = 0;

  getResultCountries(): CountryList[] {
    return this.result;
  }

  getSumPopulation(): number {
    return this.sumPopulation;
  }
  europeanUnionCountries() {
    let countries = [];
    for (let i = 0; i < this.countryList.length; i++) {
      if (
        this.countryList[i].regionalBlocs &&
        this.countryList[i].regionalBlocs[0].acronym === "EU"
      ) {
        countries.push(this.countryList[i]);
      }
    }
    this.result = countries;
    return this;
  };

  countriesWithoutLetterA() {
    this.result = this.result.filter(
      (country: CountryList) => !country.name.includes("a")
    );
    return this;
  };

  sortByPopulation() {
    this.result = this.result.sort(
      (a: CountryList, b: CountryList) => b.population - a.population
    );
    return this;
  };
  sumCountriesPopulation() {
    this.sumPopulation = this.result
      .slice(0, 5)
      .map((country: CountryList) => country.population)
      .reduce((a: number, b: number) => a + b);
    return this;
  };
}

export const checkHighPopulation = (
  obj: EuropeUnionCountries,
  num: number
): boolean => {
  const population: number = obj
    .europeanUnionCountries()
    .countriesWithoutLetterA()
    .sortByPopulation()
    .sumCountriesPopulation().sumPopulation;

  return population > num;
};