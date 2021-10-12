import {
  checkValidateCondition,
  fetchCountryList
} from "./src/exercise_1/exercise_1";
import constants from "./src/utils/constants";
import dataFromStorage from "./src/dataStorage";
// import { checkHighProperty } from "./src/exercise_2/exercise_2";
// import { servicesCountryList, servicesCountryListKey } from './src/utils/servicesCountryList';
// import { CountryList } from "./src/types";

if (checkValidateCondition(dataFromStorage, constants)) {
  fetchCountryList(dataFromStorage, constants);
}

// const inputArrKeys = Array.from(document.querySelectorAll('.countriesKeys'));
// const btnGetResult = document.getElementById('getResult');
// const result = document.getElementById('result');

// btnGetResult.addEventListener('click', () => {
//   if (inputArrKeys.every(input => input.value)) {
//     inputArrKeys.forEach(input => servicesCountryListKey[input.id] = input.value);
//   }
//   console.log('Obiekt servicesCountryList: ', servicesCountryListKey)
//   const highProperty = checkHighProperty(dataFromStorage, servicesCountryList, servicesCountryListKey);
//   result.innerText = `Czy suma ${servicesCountryListKey.property} jest większa od ${servicesCountryListKey.border}: ${highProperty}`
// });
