import { mount } from "@vue/test-utils";
import Table from "../../../src/components/table";

describe("Table.spec.js", () => {
  let cmp;
  let array = [
    {
      "Country": "ALA Aland Islands",
      "CountryCode": "AX",
      "Slug": "ala-aland-islands",
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Afghanistan",
      "CountryCode": "AF",
      "Slug": "afghanistan",
      "NewConfirmed": 18,
      "TotalConfirmed": 299,
      "NewDeaths": 1,
      "TotalDeaths": 7,
      "NewRecovered": 0,
      "TotalRecovered": 10,
      "Date": "2020-04-05T06:37:00Z"
    }
  ]
  beforeEach(() => {
    cmp = mount(Table, {
      // Be aware that props is overridden using `propsData`
      propsData: {
        data : array,
        total: 0,
        columns: []
      }
    });
  });

  it('has received array as the data property', () => {
    expect(cmp.vm.data).toEqual(array);
  });

  it("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  });
});