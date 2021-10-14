import { countryList } from "../dataStorage";
import { CountriesDivision, CountryList } from "../types";

const REGIONAL_BLOCS = ['EU', 'AU', 'NAFTA', 'other'];

const createObj = (regional: string[]): CountriesDivision | {} => {
  let obj: CountriesDivision | {} = {};
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

const checkAndSaveCurrencies = (country: CountryList, region: string): string[] => {
  let countryRegion = countriesFromRegions[region];
  if (!country.currencies) {
    return countryRegion.currencies;
  }

  let currenciesNames: string[] = [];
  country.currencies.forEach(currencies => {
    if (!countryRegion.currencies.includes(currencies.name)) {
      currenciesNames.push(currencies.name);
    }
  });
  return [...countryRegion.currencies, ...currenciesNames];
}

const checkAndSaveLanguages = (country: CountryList, region: string): string[] => {
  let countryRegion = countriesFromRegions[region];
  country.languages.forEach((languageObj, index) => {
    let checkLanguage = countryRegion.languages[country.languages[index].iso639_1];
    if (!checkLanguage) {
      countryRegion.languages[country.languages[index].iso639_1] = {
        countries: [],
        population: 0,
        area: 0,
        name: '',
      };
    }
    let language = countryRegion.languages[languageObj.iso639_1];
    language.countries.push(country.alpha3Code);
    language.population += country.population;
    language.area += country.area;
    language.name = languageObj.nativeName;

  })
  return countryRegion.languages;
}

const saveDataCountryInObj = (country: CountryList, region: string) => {
  let countryRegion = countriesFromRegions[region];
  countryRegion.countries.push(country.nativeName);
  countryRegion.population += country.population;
  countryRegion.currencies = checkAndSaveCurrencies(country, region);
  countryRegion.languages = checkAndSaveLanguages(country, region);
}

const providerDataCountries = (country: CountryList, regions: string[]) => {
  if (!country.regionalBlocs) {
    saveDataCountryInObj(country, regions.at(-1));
    return;
  }
  country.regionalBlocs.forEach(blocs => {
    let regionBlocs = regions.at(-1);
    if (validateBlocs(blocs.acronym)) regionBlocs = blocs.acronym;
    saveDataCountryInObj(country, regionBlocs);
  });
}

const validateBlocs = (region: string): boolean => {
  return ['EU', 'AU', 'NAFTA'].includes(region);
}

const splitCountries = (countries: CountryList[]) => {
  countries.forEach(country => {
    providerDataCountries(country, REGIONAL_BLOCS);
  });
}

const countriesFromRegions: CountriesDivision | {} = createObj(REGIONAL_BLOCS);
splitCountries(countryList);
sortCountriesNames(countriesFromRegions);
console.log(countriesFromRegions);