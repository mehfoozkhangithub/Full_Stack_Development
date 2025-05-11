import { filter } from "./object.data";

import data from "./Data.json";

test("testing the filter object is smilar or not.", () => {
  expect(filter(data, 4)).toEqual(data[4 - 1]);
});
