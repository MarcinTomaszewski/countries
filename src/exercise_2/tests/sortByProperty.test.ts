import { servicesCountryList } from "../../utils/servicesCountryList";

const { sortByProperty } = servicesCountryList;

const countryList = [
  { name: "Czech", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 1000 },
  { name: "Belgium", population: 2000, regionalBlocs: [{ acronym: "EU" }], area: 2000 },
  { name: "Swiden", population: 3400, regionalBlocs: [{ acronym: "EU" }], area: 3000 }
];

describe('sort countries by propety', () => {
  test("sort countries by population size so that the largest is first", () => {
    const property = 'population';
    const countries = sortByProperty(countryList, property);

    expect(countryList[0].name).toBe("Swiden");
    expect(countryList[countryList.length - 1].name).toBe("Czech");
    expect(countryList).toHaveLength(countries.length);
  });

  test("sort countries by area size so that the largest is first", () => {
    const property = 'area';
    const countries = sortByProperty(countryList, property);

    expect(countryList[0].name).toBe("Swiden");
    expect(countryList[countryList.length - 1].name).toBe("Czech");
    expect(countryList).toHaveLength(countries.length);
  });
})

