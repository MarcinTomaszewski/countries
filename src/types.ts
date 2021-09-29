export interface CountryList {
  population: number;
  name: string;
  regionalBlocs: [{ acronym: string }];
}

export interface Storage {
  time: number;
  countryList: CountryList[];
}

export interface Constants {
  COUNTRY_KEY: string;
  TIME_KEY: string;
  API_URL: string;
  TIME_SEVEN_DAYS: number;
  CURRENT_TIME: number;
  BORDER_POPULATION: number;
}

export interface StorageServices {
  get(key: string): string | null;
  set(key: string, value: any): void;
  remove(key: string): void;
  clear(): void;
}

export interface EuropeUnionCountries {
  sumPopulation: number;
  countryList: CountryList[];
  result: CountryList[];
  europeanUnionCountries(): this;
  countriesWithoutLetterA(): this;
  sortByPopulation(): this;
  sumCountriesPopulation(): this;
}

// For test.ts
// export interface EuropeUnionCountries {
//   countryList: null | CountryList[];
//   result: null | CountryList[] | number;
//   europeanUnionCountries(arr?: CountryList[]): this;
//   countriesWithoutLetterA(arr?: CountryList[]): this;
//   sortByPopulation(arr?: CountryList[]): this;
//   sumCountriesPopulation(arr?: CountryList[]): this;
// }
