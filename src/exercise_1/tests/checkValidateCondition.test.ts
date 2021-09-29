import { checkValidateCondition } from "../exercise_1";

describe("check the conditions of data download", () => {
  test("check localstorage is empty", () => {
    const storage = {
      countryList: [],
      time: 5
    };

    const config = {
      TIME_SEVEN_DAYS: 1,
      CURRENT_TIME: 5,
      COUNTRY_KEY: 'string',
      TIME_KEY: 'string',
      API_URL: 'string',
      BORDER_POPULATION: 0
    };

    expect(checkValidateCondition(storage, config)).toBe(false);
  });

  test("check localstorage is full", () => {
    const storage = {
      countryList: [{ name: "Poland", population: 400 }],
      time: 3
    };

    const config = {
      TIME_SEVEN_DAYS: 5,
      CURRENT_TIME: 5,
      COUNTRY_KEY: 'string',
      TIME_KEY: 'string',
      API_URL: 'string',
      BORDER_POPULATION: 0
    };

    expect(checkValidateCondition(storage, config)).toBe(false);
  });

  test("check if more than seven days have passed", () => {
    const storage = {
      countryList: [{ name: "Poland", population: 400 }],
      time: 1
    };

    const config = {
      TIME_SEVEN_DAYS: 2,
      CURRENT_TIME: 5,
      COUNTRY_KEY: 'string',
      TIME_KEY: 'string',
      API_URL: 'string',
      BORDER_POPULATION: 0
    };

    expect(checkValidateCondition(storage, config)).toBe(true);
  });

  test("check if less than seven days have passed", () => {
    const storage = {
      countryList: [{ name: "Poland", population: 400 }],
      time: 5
    };

    const config = {
      TIME_SEVEN_DAYS: 2,
      CURRENT_TIME: 3,
      COUNTRY_KEY: 'string',
      TIME_KEY: 'string',
      API_URL: 'string',
      BORDER_POPULATION: 0
    };

    expect(checkValidateCondition(storage, config)).toBe(false);
  });

  test("exactly seven days passed", () => {
    const storage = {
      countryList: [{ name: "Poland", population: 400 }],
      time: 5
    };

    const config = {
      TIME_SEVEN_DAYS: 5,
      CURRENT_TIME: 10,
      COUNTRY_KEY: 'string',
      TIME_KEY: 'string',
      API_URL: 'string',
      BORDER_POPULATION: 0
    };

    expect(checkValidateCondition(storage, config)).toBe(true);
  });
});
