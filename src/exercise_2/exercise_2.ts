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
    let countries = this.countryList.filter(
      (country) =>
        country.regionalBlocs && country.regionalBlocs[0].acronym === "EU"
    );
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
      (a: CountryList, b: CountryList) => b.population / b.area - a.population / a.area
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
    .sumCountriesPopulation().getSumPopulation();

  return population > num;
};
