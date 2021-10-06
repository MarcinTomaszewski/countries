import { CountryList, Storage, Constants } from "../types";
import constants from "../utils/constants";
import localStore from "../services/localStorage";

const { TIME_KEY } = constants;
const { set } = localStore;

export const checkChangesInCountries = (
  currentData: CountryList[],
  prevData: CountryList[]
): CountryList[] => {
  if (!prevData) {
    return currentData;
  }
  return prevData.map((country, i) => {
    if (country.population !== currentData[i].population) {
      country.population = currentData[i].population;
    }
    return country;
  });
};

export const countryNamesPopulaChange = (
  currentData: CountryList[],
  prevData: CountryList[]
): string[] => {
  const countryNames: string[] = currentData
    .filter((country, i) => prevData[i].population !== country.population)
    .map((country) => country.name);

  console.log("Lista państw, w których zmieniła się populacja.");
  console.table(countryNames);
  return countryNames;
};

export const fetchCountryList = (
  dataStorage: Storage,
  constants: Constants
) => {
  const { countryList } = dataStorage;
  const { API_URL, CURRENT_TIME, COUNTRY_KEY } = constants;

  fetch(API_URL)
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error(`Wystąpił błąd: ${res.status}`);
    })
    .then((res) => {
      const currentList: CountryList[] = res;

      if (countryList) {
        countryNamesPopulaChange(currentList, countryList);
      }

      set(TIME_KEY, CURRENT_TIME);
      set(COUNTRY_KEY, checkChangesInCountries(currentList, countryList));
    })
    .catch((error) => console.log(error));
};

export const checkValidateCondition = (
  dataStorage: Storage,
  constants: Constants
): boolean => {
  const { countryList, time } = dataStorage;
  const { TIME_SEVEN_DAYS, CURRENT_TIME } = constants;
  return !countryList || time + TIME_SEVEN_DAYS <= CURRENT_TIME;
};
