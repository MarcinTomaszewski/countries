import { Storage } from "../../types";
//CurrentData można połączyć w jeden obiekt. Zrobię to w wolnej chwili.

//countryNamesPopulaChange.test.js
export const currentDataChangeNames = [
  { name: "Poland", population: 400, area: 12500, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'pl' },
  { name: "England", population: 800, area: 23600, nativeName: 'England', currencies: [{ name: 'pound' }], languages: [{ iso639_1: 'en', nativeName: 'english' }], alpha3Code: 'en' },
  { name: "Italy", population: 300, area: 18500, nativeName: 'Italia', currencies: [{ name: 'euro' }], languages: [{ iso639_1: 'it', nativeName: 'italiano' }], alpha3Code: 'it' }
];

//checkValidateCondition.test.ts
export const storageCheckValidate: Storage = {
  countryList: [{ name: "Poland", population: 400, area: 12500, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'pl' }],
  time: 5
};

export const configCheckValidate = {
  TIME_SEVEN_DAYS: 1,
  CURRENT_TIME: 5,
}
//checkChangesInCountries.test.ts
export const currentDataCheckChanges = [
  { name: "Poland", population: 400, area: 24700, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'pl' },
  { name: "England", population: 800, area: 35600, nativeName: 'England', currencies: [{ name: 'pound' }], languages: [{ iso639_1: 'en', nativeName: 'english' }], alpha3Code: 'en' },
  { name: "Italy", population: 300, area: 14598, nativeName: 'Italia', currencies: [{ name: 'euro' }], languages: [{ iso639_1: 'it', nativeName: 'italiano' }], alpha3Code: 'it' }
];
