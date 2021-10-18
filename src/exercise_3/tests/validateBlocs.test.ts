import { validateBlocs } from "../exercise_3";

test.each([
  ['EU', true],
  ['AU', true],
  ['NAFTA', true],
  ['other', false]
])('Check validation block', (region, expected) => {
  const result = validateBlocs(region);
  expect(result).toBe(expected);
});

