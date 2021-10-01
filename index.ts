import {
  checkValidateCondition,
  fetchCountryList,
  dataFromStorage
} from "./src/exercise_1/exercise_1";
import { constants } from "./src/utils/constants";
import {
  CountriesEuropeanUnion,
  checkHighPopulation
} from "./src/exercise_2/exercise_2";
const { countryList } = dataFromStorage;
const { BORDER_POPULATION } = constants;

if (checkValidateCondition(dataFromStorage, constants)) {
  fetchCountryList(dataFromStorage, constants);
}

const countriesEu = new CountriesEuropeanUnion(
  countryList
);

if (countryList) {
  console.log(
    "Czy suma populacji jest większa od 500mln: ",
    checkHighPopulation(countriesEu, BORDER_POPULATION)
  );

  console.log(
    countriesEu
      .europeanUnionCountries()
      .countriesWithoutLetterA()
      .sortByPopulation()
      .sumCountriesPopulation().sumPopulation
  );
}



