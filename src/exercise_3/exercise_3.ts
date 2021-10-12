import dataFromStorage from "../dataStorage";
import { CountriesDivision, CountryList } from "../types";

const { countryList } = dataFromStorage;
const OTHER_BLOCS = 'other';

const countriesFromRegions: CountriesDivision = {
  EU: {
    countries: [],
    population: 0,
    languages: {},
    currencies: []
  },
  NAFTA: {
    countries: [],
    population: 0,
    languages: {},
    currencies: []
  },
  AU: {
    countries: [],
    population: 0,
    languages: {},
    currencies: []
  },
  other: {
    countries: [],
    population: 0,
    languages: {},
    currencies: []
  },
}
const sortHelper = (a: string, b: string) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0
}

const sortCountriesNames = (obj: CountriesDivision) => {
  for (const region in obj) {
    obj[region].countries.sort(sortHelper);
  }
}
const checkPropertyRepeats = (country: CountryList, region: string, property: string) => {
  if (!country[property]) {
    return;
  }
  if (countriesFromRegions[region][property].includes(country[property][0].name)) {
    return;
  }
  countriesFromRegions[region][property].push(country[property][0].name);
}

const checkAndSaveLanguages = (country: CountryList, region: string) => {
  let test = countriesFromRegions[region].languages[country.languages[0].iso639_1];
  if (!test) {
    test = {
      countries: [],
      population: 0,
      area: 0,
      name: '',
    };
  }
  test.countries.push(country.alpha3Code);
  test.population += country.population;
  test.area += country.area;
  test.name = country.languages[0].nativeName;
}

const providerDataCountries = (country: CountryList, region: string) => {
  countriesFromRegions[region].countries.push(country.nativeName);
  countriesFromRegions[region].population += country.population;
  checkPropertyRepeats(country, region, 'currencies',);
  checkAndSaveLanguages(country, region);
}

const validateBlocs = (region: string): boolean => {
  return region === 'EU' || region === 'AU' || region === 'NAFTA';
}
const splitCountries = (countries: CountryList[]) => {
  countries.forEach(country => {
    if (country.regionalBlocs) {
      const regionBlocs = country.regionalBlocs[0].acronym;
      if (validateBlocs(regionBlocs)) providerDataCountries(country, regionBlocs);
      else providerDataCountries(country, OTHER_BLOCS);
    } else {
      providerDataCountries(country, OTHER_BLOCS);
    }
  });
}

splitCountries(countryList);
sortCountriesNames(countriesFromRegions);
console.log(countriesFromRegions);
