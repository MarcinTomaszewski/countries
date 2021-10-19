import { CountriesDivision, CountryList } from "../types";

export const REGIONAL_BLOCS = ['EU', 'AU', 'NAFTA', 'other'];

export const createObj = (regional: string[]): CountriesDivision | {} => {
  let obj: CountriesDivision | {} = {};
  regional.forEach(region => {
    obj[region] = {
      countries: [],
      population: 0,
      languages: {},
      currencies: [],
      area: 0
    }
  })
  return obj;
}

export const sortCountriesNames = (obj: CountriesDivision | {}) => {
  for (const region in obj) {
    obj[region].countries.sort((a: string, b: string) => {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
  }
}

export const checkCurrencies = (country: CountryList, region: string): string[] => {
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

export const checkLanguages = (country: CountryList, region: string): string[] => {
  let countryRegion = countriesFromRegions[region];
  country.languages.forEach((languageObj) => {
    let checkLanguage = countryRegion.languages[languageObj.iso639_1];
    if (!checkLanguage) {
      countryRegion.languages[languageObj.iso639_1] = {
        countries: [],
        population: 0,
        area: 0,
        name: '',
      };
    }
    let language = countryRegion.languages[languageObj.iso639_1];
    language.countries.push(country.alpha3Code);
    language.population += country.population;
    language.area += !country.area ? 0 : country.area;
    language.name = languageObj.nativeName;

  })
  return countryRegion.languages;
}

export const checkArea = (country: CountryList, region: string) => {
  let countryRegion = countriesFromRegions[region];
  if (!country.area) {
    return countryRegion.area;
  }
  return countryRegion.area += country.area;
}

export const saveDataCountryInObj = (obj: CountriesDivision | {}, country: CountryList, region: string) => {
  let countryRegion = obj[region];
  countryRegion.countries.push(country.nativeName);
  countryRegion.population += country.population;
  countryRegion.area = checkArea(country, region);
  countryRegion.currencies = checkCurrencies(country, region);
  countryRegion.languages = checkLanguages(country, region);
}

export const providerDataCountries = (obj: CountriesDivision | {}, country: CountryList, regions: string[]) => {
  if (!country.regionalBlocs) {
    saveDataCountryInObj(obj, country, regions.at(-1));
    return;
  }
  country.regionalBlocs.forEach(blocs => {
    let regionBlocs = regions.at(-1);
    if (validateBlocs(blocs.acronym)) regionBlocs = blocs.acronym;
    saveDataCountryInObj(obj, country, regionBlocs);
  });
}

export const validateBlocs = (region: string): boolean => {
  return ['EU', 'AU', 'NAFTA'].includes(region);
}

export const splitCountries = (countries: CountryList[], obj: CountriesDivision | {}) => {
  countries.forEach(country => {
    providerDataCountries(obj, country, REGIONAL_BLOCS);
  });
}

export const countriesFromRegions: CountriesDivision | {} = createObj(REGIONAL_BLOCS);

export const getResults = (obj: CountriesDivision | {}, property: string, place: number) => {
  let organization: [string, number] | [string, string[]][] = [];
  for (let [key, value] of Object.entries(obj)) {
    if (obj.hasOwnProperty(key)) {
      if (key !== 'other') {
        organization.push([key, value[property]]);
      }
    }
  }

  organization.sort((a: any, b: any) => b[1] - a[1]);

  if (property === 'currencies' || 'countries') {
    organization.sort((a, b) => b[1].length - a[1].length);
  }

  if (property === 'languages') {
    let countries: [string, string[]][] = []
    organization.forEach((item) => {
      countries.push([item[0], Object.keys(item[1])]);
    })
    countries.sort((a, b) => b[1].length - a[1].length);
    return countries[place];
  }
  return organization[place];
}

export const getNativeName = (obj: CountriesDivision | {}, property: string, track: string, place: number) => {
  let organization: { name: string, countries?: string[], population?: number, area?: number }[] = [];
  let propertyValue = track === 'largestNumCountries' ? 'countries' : 'population';
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key !== 'other') {
        for (let language in obj[key][property]) {
          organization.push({ name: obj[key][property][language].name, [propertyValue]: obj[key][property][language][propertyValue] });
        }
      }
    }
  }
  let result = track === 'largestNumCountries' ? organization.sort((a, b) => b.countries.length - a.countries.length) : organization.sort((a, b) => a.population - b.population);
  return result[place];
}

export const getNamesLanguagesFromAreas = (obj: CountriesDivision | {}, property: string, size?: string) => {
  let organization: [string, number] | [string, string[]][] = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key !== 'other') {
        organization.push([key, obj[key][property]]);
      }
    }
  }

  organization.sort((a: any, b: any) => b[1] - a[1]);
  let sizeArea = size === 'largeArea' ? organization[0][0] : organization[2][0];
  const nativeNames: string[] = [];

  for (const [key, value] of Object.entries(obj[sizeArea].languages)) {
    // @ts-ignore
    nativeNames.push(value.name)
  }

  return nativeNames;
}
