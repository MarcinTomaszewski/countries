//Ze wszystkich countryList można stworzyć jeden obiekt. Zrobię to w wolnej chwili.

//checkHighProperty.test.ts
export const countryListForCheck = {
  time: 10,
  countryList: [
    { name: "Czech", population: 23000, regionalBlocs: [{ acronym: "EU" }], area: 1000 },
    { name: "Belgium", population: 20000, regionalBlocs: [{ acronym: "EU" }], area: 2560 },
    { name: "Swiden", population: 34000, regionalBlocs: [{ acronym: "EU" }], area: 3100 },
    { name: "Greece", population: 6400, regionalBlocs: [{ acronym: "EU" }], area: 4800 }
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
  { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 5000 },
  { name: "USA", population: 1200, regionalBlocs: [{ acronym: "USA" }], area: 11000 },
  { name: "Italy", population: 2000, regionalBlocs: [{ acronym: "EU" }], area: 15000 },
  { name: "France", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 8000 },
  { name: "Egipt", population: 3400, regionalBlocs: [{ acronym: "TUE" }], area: 16809 },
  { name: "Chile", population: 2000, area: 20000 },
  { name: "Brazil", population: 3400, area: 30000 }
];

//getCountriesWithoutLetter.test.ts
export const countryListForLeeter = [
  { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 12980 },
  { name: "Belgium", population: 1200, regionalBlocs: [{ acronym: "EU" }], area: 25879 },
  { name: "Italy", population: 2000, regionalBlocs: [{ acronym: "EU" }], area: 12387 },
  { name: "France", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 23900 }
];

//sortByProperty.test.ts
export const countryListForSort = [
  { name: "Czech", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 1000 },
  { name: "Belgium", population: 2000, regionalBlocs: [{ acronym: "EU" }], area: 4000 },
  { name: "Swiden", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 3000 }
];

//sumByProperty.test.ts
export const countryListForSum = [
  { name: "Czech", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 3000 },
  { name: "Belgium", population: 2000, regionalBlocs: [{ acronym: "EU" }], area: 5000 },
  { name: "Swiden", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 4000 },
  { name: "Greece", population: 6400, regionalBlocs: [{ acronym: "EU" }], area: 2300 },
  { name: "Luxembourg", population: 1400, regionalBlocs: [{ acronym: "EU" }], area: 980 },
  { name: "Cyprus", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 1100 }
];