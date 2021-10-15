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
      currencies: [],
      area: 0
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

const checkArea = (country: CountryList, region: string) => {
  let countryRegion = countriesFromRegions[region];
  if (!country.area) {
    return countryRegion.area;
  }
  return countryRegion.area += country.area;
}

const saveDataCountryInObj = (country: CountryList, region: string) => {
  let countryRegion = countriesFromRegions[region];
  countryRegion.countries.push(country.nativeName);
  countryRegion.population += country.population;
  countryRegion.area = checkArea(country, region);
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

const getResults = (obj: CountriesDivision | {}, property: string, place: number) => {
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

const getNativeName = (obj: CountriesDivision | {}, property: string, track: string, place: number) => {
  let organization: { name: string, countries?: string[], population?: number, area?: number }[] = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key !== 'other') {
        for (let test in obj[key][property]) {
          if (track === 'largestNumCountries') {
            organization.push({ name: obj[key][property][test].name, countries: obj[key][property][test].countries });
          } else if (track === 'smallestNumPeople') {
            organization.push({ name: obj[key][property][test].name, population: obj[key][property][test].population });
          }
        }
      }
    }

    let result = track === 'largestNumCountries' ? organization.sort((a, b) => b.countries.length - a.countries.length) : organization.sort((a, b) => a.population - b.population);
    return result[place];
  }
}

const getNamesLanguagesFromAreas = (obj: CountriesDivision | {}, property: string, size?: string) => {
  let organization: [string, number] | [string, string[]][] = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key !== 'other') {
        organization.push([key, obj[key][property]]);
      }
    }
  }

  organization.sort((a: any, b: any) => b[1] - a[1]);
  const largeArea = organization[0][0];
  const smallArea = organization[2][0];
  const nativeNames: string[] = [];

  if (size === 'largeArea') {
    for (const [key, value] of Object.entries(obj[largeArea].languages)) {
      nativeNames.push(value.name)
    }
  } else if (size === 'smallArea') {
    for (const [key, value] of Object.entries(obj[smallArea].languages)) {
      nativeNames.push(value.name)
    }
  }
  return nativeNames;
}

const textForConsole = {
  sizePopulation: {
    largest: 'Organizacja o największej liczbie populacji: ',
    secondPlace: 'Organizacja zajmująca drugie miejsce pod względem wielkości populacji: '
  },
  thirdLargestArea: 'Organizacja zajmująca trzecie miejsce pod względem wielkości obszaru: ',
  numberLanguages: {
    largest: `Organizacja z największą liczbą języków: `,
    smallest: `Organizacja z najmniejszą liczbą języków: `,
  },
  largestNumberCurrencies: 'Organizacja o największej liczbie walut: ',
  mallestNumberMemberStates: 'Organizacja o najmniejszej liczbie państw członkowskich: ',
  nativeNameLanguageGreatestNumberCountries: 'Natywna nazwa języka wykorzystywanego w najwiekszej liczbie krajów: ',
  nativeNameLanguageUsedSmallestNumberPeople: 'Natywna nazwa języka wykorzystywanego przez najmniejszą liczbę ludności: ',
  nativeNamesLanguagesUsedArea: {
    largestArea: 'Natywne nazwy języków wykorzystywanych na największym obszarze: ',
    smallestArea: 'Natywne nazwy języków wykorzystywanych na najmniejszym obszarze: '
  }
}

const { sizePopulation, thirdLargestArea, numberLanguages, largestNumberCurrencies, mallestNumberMemberStates, nativeNameLanguageGreatestNumberCountries, nativeNameLanguageUsedSmallestNumberPeople, nativeNamesLanguagesUsedArea } = textForConsole;

console.log(sizePopulation.largest, getResults(countriesFromRegions, 'population', 0));
console.log(sizePopulation.secondPlace, getResults(countriesFromRegions, 'population', 1));
console.log(thirdLargestArea, getResults(countriesFromRegions, 'area', 2));
console.log(numberLanguages.largest, getResults(countriesFromRegions, 'languages', 0));
console.log(numberLanguages.smallest, getResults(countriesFromRegions, 'languages', 2));
console.log(largestNumberCurrencies, getResults(countriesFromRegions, 'currencies', 0));
console.log(mallestNumberMemberStates, getResults(countriesFromRegions, 'countries', 2));
console.log(nativeNameLanguageGreatestNumberCountries, getNativeName(countriesFromRegions, 'languages', 'largestNumCountries', 0));
console.log(nativeNameLanguageUsedSmallestNumberPeople, getNativeName(countriesFromRegions, 'languages', 'smallestNumPeople', 0))
console.log(nativeNamesLanguagesUsedArea.largestArea, getNamesLanguagesFromAreas(countriesFromRegions, 'area', 'largeArea'));
console.log(nativeNamesLanguagesUsedArea.smallestArea, getNamesLanguagesFromAreas(countriesFromRegions, 'area', 'smallArea'));