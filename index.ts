import {
  checkValidateCondition,
  fetchCountryList
} from "./src/exercise_1/exercise_1";
import constants from "./src/utils/constants";
import dataFromStorage from "./src/dataStorage";
import {
  splitCountries,
  sortCountriesNames,
  getResults,
  getNamesLanguagesFromAreas,
  getNativeName,
  countriesFromRegions
} from "./src/exercise_3/exercise_3";


if (checkValidateCondition(dataFromStorage, constants)) {
  fetchCountryList(dataFromStorage, constants);
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

const { countryList } = dataFromStorage;
splitCountries(countryList, countriesFromRegions);
sortCountriesNames(countriesFromRegions);
console.log(countriesFromRegions);

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
console.log(countryList)