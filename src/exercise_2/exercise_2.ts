import { Storage, ServicesKeys, ServicesCountries } from "../types";

export const checkHighProperty = (dataStorage: Storage, services: ServicesCountries, keys: ServicesKeys): boolean => {
  const { countryList } = dataStorage;
  const { getCountriesFromRegional, getCountriesWithoutLetter, sortByProperty, sumByProperty } = services;
  const { regional, letter, property, numCountries, border } = keys;

  const countriesRegional = getCountriesFromRegional(countryList, regional);
  const countriesWithoutLetter = getCountriesWithoutLetter(countriesRegional, letter);
  const sortCountries = sortByProperty(countriesWithoutLetter, property);
  const sumPopulation = sumByProperty(sortCountries, numCountries, property);

  return sumPopulation > border;
}