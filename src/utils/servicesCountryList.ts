import { CountryList, ServicesKeys, ServicesCountries } from "../types";

export const servicesCountryList: ServicesCountries = {
  getCountriesFromRegional: (arr, regional): CountryList[] => arr.filter(country => country.regionalBlocs && country.regionalBlocs[0].acronym === regional),
  getCountriesWithoutLetter: (arr, letter): CountryList[] => arr.filter(country => !country.name.toLowerCase().includes(letter)),
  sortByProperty: (arr, property): CountryList[] => arr.sort((a, b) => b[property] - a[property]),
  sumByProperty: (arr, numCountries, property): number => arr.slice(0, numCountries).map(country => country[property]).reduce((a, b) => a + b),
};

export const servicesCountryListKey: ServicesKeys = {
  regional: 'EU',
  letter: 'a',
  property: 'population',
  numCountries: 5,
  border: 500_000_000
}