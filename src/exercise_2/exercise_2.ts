import { Storage, ServicesKeys, ServicesCountries } from "../types";

export const checkHighProperty = ({ countryList }: Storage, { getCountriesFromRegional, getCountriesWithoutLetter, sortByProperty, sumByProperty }: ServicesCountries, { regional, letter, property, numCountries, border }: ServicesKeys): boolean => {

  const countriesRegional = getCountriesFromRegional(countryList, regional);
  const countriesWithoutLetter = getCountriesWithoutLetter(countriesRegional, letter);
  const sortCountries = sortByProperty(countriesWithoutLetter, property);
  const sumPopulation = sumByProperty(sortCountries, numCountries, property);

  return sumPopulation > border;
}