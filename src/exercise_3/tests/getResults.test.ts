import { getResults } from '../exercise_3';
import { countriesTest } from "./mockValues";

describe('Check result', () => {
  test('Organization with the largest population', () => {
    const result = getResults(countriesTest, 'population', 0);
    expect(result).toEqual(['AU', 1342212256]);
  });

  test('Organization ranked second in terms of population size', () => {
    const result = getResults(countriesTest, 'population', 1);
    expect(result).toEqual(['NAFTA', 496422114]);
  });

  test('Organization with the third largest area', () => {
    const result = getResults(countriesTest, 'area', 2);
    expect(result).toEqual(['EU', 4236679]);
  });

  test('Organization with the most languages', () => {
    const result = getResults(countriesTest, 'languages', 0);
    expect(result[0]).toEqual('AU');
  });

  test('Organization with the fewest languages', () => {
    const result = getResults(countriesTest, 'languages', 2);
    expect(result[0]).toEqual('NAFTA');
  });

  test('Organization with the most currencies', () => {
    const result = getResults(countriesTest, 'currencies', 0);
    expect(result[0]).toEqual('AU');
  });

  test('Organization with the fewest number of member states', () => {
    const result = getResults(countriesTest, 'countries', 2);
    expect(result[0]).toEqual('NAFTA');
  });

  test('Organization with the fewest number of member states', () => {
    const result = getResults(countriesTest, 'countries', 2);
    expect(result[0]).toEqual('NAFTA');
  });
})

// console.log(sizePopulation.largest, getResults(countriesFromRegions, 'population', 0));
// console.log(sizePopulation.secondPlace, getResults(countriesFromRegions, 'population', 1));
// console.log(thirdLargestArea, getResults(countriesFromRegions, 'area', 2));
// console.log(numberLanguages.largest, getResults(countriesFromRegions, 'languages', 0));
// console.log(numberLanguages.smallest, getResults(countriesFromRegions, 'languages', 2));
// console.log(largestNumberCurrencies, getResults(countriesFromRegions, 'currencies', 0));
// console.log(mallestNumberMemberStates, getResults(countriesFromRegions, 'countries', 2));