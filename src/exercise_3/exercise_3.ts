import { countryList } from "../dataStorage";
import { CountriesDivision, CountryList } from "../types";

const REGIONAL_BLOCS = ['EU', 'AU', 'NAFTA', 'other'];

const createObj = (regional: string[]): CountriesDivision | {} => {
  let obj = {};
  regional.forEach(region => {
    obj[region] = {
      countries: [],
      population: 0,
      languages: {},
      currencies: []
    }
  })
  return obj;
}

const sortCountriesNames = (obj: CountriesDivision | {}) => {
  for (const region in obj) {
    obj[region].countries.sort((a: string, b: string) => {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
  }
}

const checkAndSaveCurrencies = (country: CountryList, region: string) => {
  let countryRegion = countriesFromRegions[region];
  if (!country.currencies || countryRegion.currencies.includes(country.currencies[0].name)) {
    return countryRegion.currencies;
  }

  let currenciesName = country.currencies[0].name;
  return [...countryRegion.currencies, currenciesName];
}

const checkAndSaveLanguages = (country: CountryList, region: string) => {
  let countryRegion = countriesFromRegions[region];
  let checkLanguage = countryRegion.languages[country.languages[0].iso639_1];
  if (!checkLanguage) {
    countryRegion.languages[country.languages[0].iso639_1] = {
      countries: [],
      population: 0,
      area: 0,
      name: '',
    };
  }
  let language = countryRegion.languages[country.languages[0].iso639_1];
  language.countries.push(country.alpha3Code);
  language.population += country.population;
  language.area += country.area;
  language.name = country.languages[0].nativeName;
  return countryRegion.languages;
}

const providerDataCountries = (country: CountryList, region: string) => {
  let countryRegion = countriesFromRegions[region];
  countryRegion.countries.push(country.nativeName);
  countryRegion.population += country.population;
  countryRegion.currencies = checkAndSaveCurrencies(country, region);
  countryRegion.languages = checkAndSaveLanguages(country, region);
}

const validateBlocs = (region: string): boolean => {
  return ['EU', 'AU', 'NAFTA'].includes(region);
}

const splitCountries = (countries: CountryList[]) => {
  countries.forEach(country => {
    let blocs = REGIONAL_BLOCS.at(-1);
    if (country.regionalBlocs) {
      const regionBlocs = country.regionalBlocs[0].acronym;
      if (validateBlocs(regionBlocs)) blocs = regionBlocs;
    }
    providerDataCountries(country, blocs);
  });
}

const countriesFromRegions: CountriesDivision | {} = createObj(REGIONAL_BLOCS);
splitCountries(countryList);
sortCountriesNames(countriesFromRegions);
console.log(countriesFromRegions)