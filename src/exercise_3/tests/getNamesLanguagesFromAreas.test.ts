import { getNamesLanguagesFromAreas } from '../exercise_3';
import { countriesTest } from "./mockValues";

describe('Check native names', () => {
  test('Native names of the languages used in the largest area', () => {
    const result = getNamesLanguagesFromAreas(countriesTest, 'area', 'largeArea');
    expect(result).toHaveLength(30);
  });

  test('Native names of languages used in the smallest area', () => {
    const result = getNamesLanguagesFromAreas(countriesTest, 'area', 'smallArea');
    expect(result).toHaveLength(28);
  });
});
