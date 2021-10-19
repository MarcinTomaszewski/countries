import { createObj } from "../exercise_3";
import { REGIONAL_BLOCS } from "./mockValues";

const obj = createObj(REGIONAL_BLOCS);

describe('Check properties', () => {
  test('Object contains properties', () => {
    REGIONAL_BLOCS.forEach(blocs => expect(obj).toHaveProperty(blocs))
  });

  test('Object has no properties', () => {
    expect(obj).not.toHaveProperty('AL');
  });
});