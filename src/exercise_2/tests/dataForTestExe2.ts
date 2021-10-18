//Ze wszystkich countryList można stworzyć jeden obiekt. Zrobię to w wolnej chwili.

//checkHighProperty.test.ts
export const countryListForCheck = {
  time: 10,
  countryList: [
    { name: "Czech", population: 23000, regionalBlocs: [{ acronym: "EU" }], area: 1000, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'pl' },
    { name: "Belgium", population: 20000, regionalBlocs: [{ acronym: "EU" }], area: 2560, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'pl' },
    { name: "Swiden", population: 34000, regionalBlocs: [{ acronym: "EU" }], area: 3100, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'pl' },
    { name: "Greece", population: 6400, regionalBlocs: [{ acronym: "EU" }], area: 4800, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'pl' }
  ]
};

export const servicesKeyForCheck = {
  regional: 'EU',
  letter: 'a',
  property: 'population',
  numCountries: 5,
  border: 0
}

//getCountriesFromRegional.test.ts
export const countryListForRegional = [
  { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 5000, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'POL' },
  { name: "USA", population: 1200, regionalBlocs: [{ acronym: "USA" }], area: 11000, nativeName: 'USA', currencies: [{ name: 'United States dollar' }], languages: [{ iso639_1: 'us', nativeName: 'english' }], alpha3Code: 'USA' },
  { name: "Italy", population: 2000, regionalBlocs: [{ acronym: "EU" }], area: 15000, nativeName: 'Italia', currencies: [{ name: 'EURO' }], languages: [{ iso639_1: 'it', nativeName: 'italiano' }], alpha3Code: 'ITA' },
  { name: "France", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 8000, nativeName: 'France', currencies: [{ name: 'EURO' }], languages: [{ iso639_1: 'fr', nativeName: 'français' }], alpha3Code: 'FRA' },
  { name: "Egipt", population: 3400, regionalBlocs: [{ acronym: "TUE" }], area: 16809, nativeName: "مصر‎", currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'EGY' },
  { name: "Chile", population: 2000, area: 20000 },
  { name: "Brazil", population: 3400, area: 30000 }
];

//getCountriesWithoutLetter.test.ts
export const countryListForLeeter = [
  { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 12980, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'POL' },
  { name: "Belgium", population: 1200, regionalBlocs: [{ acronym: "EU" }], area: 25879, nativeName: 'België', currencies: [{ name: 'EURO' }], languages: [{ iso639_1: 'de', nativeName: 'Deutsch' }], alpha3Code: 'BEL' },
  { name: "Italy", population: 2000, regionalBlocs: [{ acronym: "EU" }], area: 12387, nativeName: 'Italia', currencies: [{ name: 'EURO' }], languages: [{ iso639_1: 'it', nativeName: 'italiano' }], alpha3Code: 'ITA' },
  { name: "France", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 23900, nativeName: 'France', currencies: [{ name: 'EURO' }], languages: [{ iso639_1: 'fr', nativeName: 'français' }], alpha3Code: 'FRA' }
];

//sortByProperty.test.ts
export const countryListForSort = [
  { name: "Czech", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 1000, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'pl' },
  { name: "Belgium", population: 2000, regionalBlocs: [{ acronym: "EU" }], area: 4000, nativeName: 'België', currencies: [{ name: 'EURO' }], languages: [{ iso639_1: 'de', nativeName: 'Deutsch' }], alpha3Code: 'BEL' },
  { name: "Sweden", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 3000, nativeName: 'Sverige', currencies: [{ name: 'Swedish krona' }], languages: [{ iso639_1: 'sv', nativeName: 'svenska' }], alpha3Code: 'SWE' }
];

//sumByProperty.test.ts
export const countryListForSum = [
  { name: "Czech", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 3000, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'pl' },
  { name: "Belgium", population: 2000, regionalBlocs: [{ acronym: "EU" }], area: 5000, nativeName: 'België', currencies: [{ name: 'EURO' }], languages: [{ iso639_1: 'de', nativeName: 'Deutsch' }], alpha3Code: 'BEL' },
  { name: "Sweden", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 4000, nativeName: 'Sverige', currencies: [{ name: 'Swedish krona' }], languages: [{ iso639_1: 'sv', nativeName: 'svenska' }], alpha3Code: 'SWE' },
  { name: "Greece", population: 6400, regionalBlocs: [{ acronym: "EU" }], area: 2300, nativeName: 'Ελλάδα', currencies: [{ name: 'EURO' }], languages: [{ iso639_1: 'el', nativeName: 'ελληνικά' }], alpha3Code: 'GRC' },
  { name: "Luxembourg", population: 1400, regionalBlocs: [{ acronym: "EU" }], area: 980, nativeName: 'Lëtzebuerg', currencies: [{ name: 'EURO' }], languages: [{ iso639_1: 'fr', nativeName: 'français' }], alpha3Code: 'LUX' },
  { name: "Cyprus", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 1100, nativeName: 'Κύπρος', currencies: [{ name: 'EURO' }], languages: [{ iso639_1: 'el', nativeName: 'ελληνικά' }], alpha3Code: 'CYP' }
];