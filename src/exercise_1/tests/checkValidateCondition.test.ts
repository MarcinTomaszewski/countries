import { checkValidateCondition } from "../exercise_1";
import { storageCheckValidate, configCheckValidate } from "./dataForTestExe1";
describe("check the conditions of data download", () => {
  test("check localstorage is empty", () => {
    const storage = { ...storageCheckValidate };
    const config = { ...configCheckValidate };
    storage.countryList = [];
    storage.time = 5;
    config.TIME_SEVEN_DAYS = 1;
    config.CURRENT_TIME = 5;

    expect(checkValidateCondition(storage, config)).toBe(false);
  });

  test("check localstorage is full", () => {
    const storage = { ...storageCheckValidate };
    const config = { ...configCheckValidate };
    storage.time = 3;
    config.TIME_SEVEN_DAYS = 5;
    config.CURRENT_TIME = 5;

    expect(checkValidateCondition(storage, config)).toBe(false);
  });

  test("check if more than seven days have passed", () => {
    const storage = { ...storageCheckValidate };
    const config = { ...configCheckValidate };
    storage.time = 1;
    config.TIME_SEVEN_DAYS = 2;
    config.CURRENT_TIME = 5;

    expect(checkValidateCondition(storage, config)).toBe(true);
  });

  test("check if less than seven days have passed", () => {
    const storage = { ...storageCheckValidate };
    const config = { ...configCheckValidate };
    storage.time = 5;
    config.TIME_SEVEN_DAYS = 2;
    config.CURRENT_TIME = 3;

    expect(checkValidateCondition(storage, config)).toBe(false);
  });

  test("exactly seven days passed", () => {
    const storage = { ...storageCheckValidate };
    const config = { ...configCheckValidate };
    storage.time = 5;
    config.TIME_SEVEN_DAYS = 5;
    config.CURRENT_TIME = 10;

    expect(checkValidateCondition(storage, config)).toBe(true);
  });
});
