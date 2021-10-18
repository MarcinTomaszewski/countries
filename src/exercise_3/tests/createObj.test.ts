import { createObj, REGIONAL_BLOCS } from "../exercise_3";

const obj = createObj(REGIONAL_BLOCS);

describe('Check properties', () => {
  test('Object contains properties', () => {
    REGIONAL_BLOCS.forEach(blocs => expect(obj).toHaveProperty(blocs))
  });

  test('Object has no properties', () => {
    expect(obj).not.toHaveProperty('AL');
  });
});