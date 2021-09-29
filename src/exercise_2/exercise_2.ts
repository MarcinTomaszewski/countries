import { CountryList, EuropeUnionCountries } from "../types";

export const countriesEuropeanUnion = function (
  this: any,
  countries: CountryList[]
): void {
  this.countryList = countries;
  this.result = [];
  this.populationSum = 0;

  this.europeanUnionCountries = function () {
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

  this.countriesWithoutLetterA = function () {
    this.result = this.result.filter(
      (country: CountryList) => !country.name.includes("a")
    );
    return this;
  };

  this.sortByPopulation = function () {
    this.result = this.result.sort(
      (a: CountryList, b: CountryList) => b.population - a.population
    );

    return this;
  };

  this.sumCountriesPopulation = function () {
    this.populationSum = this.result
      .slice(0, 5)
      .map((country: CountryList) => country.population)
      .reduce((a: number, b: number) => a + b);
    return this;
  };
};

export const checkHighPopulation = (
  obj: EuropeUnionCountries,
  num: number
): boolean => {
  const population: number = obj
    .europeanUnionCountries()
    .countriesWithoutLetterA()
    .sortByPopulation()
    .sumCountriesPopulation().populationSum;

  return population > num;
};
