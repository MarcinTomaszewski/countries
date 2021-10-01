export interface CountryList {
  name: string;
  population: number;
  regionalBlocs?: { acronym: string }[];
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
  sumPopulation: number;
  result: CountryList[];
  getResultCountries(): CountryList[];
  getSumPopulation(): number;
  europeanUnionCountries(): this;
  countriesWithoutLetterA(): this;
  sortByPopulation(): this;
  sumCountriesPopulation(): this;
}
