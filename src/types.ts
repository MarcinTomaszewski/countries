export interface CountryList {
  name: string;
  population: number;
  regionalBlocs?: { acronym: string }[];
  area: number;
}

export interface Storage {
  time: number;
  countryList: CountryList[];
}

export interface Constants {
  COUNTRY_KEY?: string;
  TIME_KEY?: string;
  API_URL?: string;
  TIME_SEVEN_DAYS: number;
  CURRENT_TIME: number;
  BORDER_POPULATION?: number;
}

export interface StorageServices {
  get(key: string): string | null;
  set(key: string, value: any): void;
  remove(key: string): void;
  clear(): void;
}

export interface EuropeUnionCountries {
  europeanUnionCountries(region: string): this;
  countriesWithoutLetterA(letter: string): this;
  sortByPopulation(property: string): this;
  sumCountriesPopulation(property: string): number;
}

export interface ServicesKeys {
  regional: string;
  letter: string;
  property: string;
  numCountries: number;
  border: number;
}

export interface ServicesCountries {
  getCountriesFromRegional(arr: CountryList[], key: string): CountryList[];
  getCountriesWithoutLetter(arr: CountryList[], key: string): CountryList[];
  sortByProperty(arr: CountryList[], key: string): CountryList[];
  sumByProperty(arr: CountryList[], numCountries: number, property: string): number;
}
