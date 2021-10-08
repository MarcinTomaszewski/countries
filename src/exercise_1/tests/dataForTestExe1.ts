import { Storage } from "../../types";
//CurrentData można połączyć w jeden obiekt. Zrobię to w wolnej chwili.

//countryNamesPopulaChange.test.js
export const currentDataChangeNames = [
  { name: "Poland", population: 400, area: 12500 },
  { name: "England", population: 800, area: 23600 },
  { name: "Italy", population: 300, area: 18500 }
];

//checkValidateCondition.test.ts
export const storageCheckValidate: Storage = {
  countryList: [{ name: "Poland", population: 400, area: 12500 }],
  time: 5
};

export const configCheckValidate = {
  TIME_SEVEN_DAYS: 1,
  CURRENT_TIME: 5,
}
//checkChangesInCountries.test.ts
export const currentDataCheckChanges = [
  { name: "Poland", population: 400, area: 24700 },
  { name: "England", population: 800, area: 35600 },
  { name: "Italy", population: 300, area: 14598 }
];
