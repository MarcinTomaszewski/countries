import { getNativeName } from '../exercise_3';
import { countriesTest } from "./mockValues";

describe('Check native language names', () => {
  test('Native name of the language used in the greatest number of countries', () => {
    const result = getNativeName(countriesTest, 'languages', 'largestNumCountries', 0);
    expect(result.name).toBe('English');
  });

  test('Native name of the language used by the smallest number of people', () => {
    const result = getNativeName(countriesTest, 'languages', 'smallestNumPeople', 0);
    expect(result.name).toBe('Gaelg');
  });
})


// console.log(nativeNameLanguageGreatestNumberCountries, getNativeName(countriesFromRegions, 'languages', 'largestNumCountries', 0));
// console.log(nativeNameLanguageUsedSmallestNumberPeople, getNativeName(countriesFromRegions, 'languages', 'smallestNumPeople', 0))