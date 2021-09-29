"use strict";
// import { CountryList, EuropeUnionCountries } from "./types";
// export const countryEuropeanUnion = function (
//   this: any,
//   countries: CountryList[] | null
// ): void {
//   this.countryList = countries || null;
//   this.result = null;
//   this.europeanUnionCountries = function (arr: CountryList[]): any {
//     let countryList = arr || this.countryList;
//     let countries = [];
//     for (let i = 0; i < countryList.length; i++) {
//       if (
//         countryList[i].regionalBlocs &&
//         countryList[i].regionalBlocs[0].acronym === "EU"
//       ) {
//         countries.push(countryList[i]);
//       }
//     }
//     this.result = countries;
//     return this;
//   };
//   this.countriesWithoutLetterA = function (arr: CountryList[]): any {
//     let countryList = arr || this.result;
//     this.result = countryList.filter((country) => !country.name.includes("a"));
//     return this;
//   };
//   this.sortByPopulation = function (arr: CountryList[]): any {
//     let countryList = arr || this.result;
//     this.result = countryList.sort((a, b) => b.population - a.population);
//     return this;
//   };
//   this.sumCountriesPopulation = function (arr: CountryList[]): any {
//     let sumPopulation = arr || this.result;
//     this.result = sumPopulation
//       .slice(0, 5)
//       .map((country) => country.population)
//       .reduce((a, b) => a + b);
//     return this;
//   };
// };
// export const checkHighPopulation = (
//   obj: EuropeUnionCountries,
//   num: number
// ): boolean => {
//   const population = obj
//     .europeanUnionCountries()
//     .countriesWithoutLetterA()
//     .sortByPopulation()
//     .sumCountriesPopulation().result;
//   return population > num;
// };
