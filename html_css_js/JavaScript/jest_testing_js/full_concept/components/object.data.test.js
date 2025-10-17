import { filter } from './object.data';

import data from './Data.json';

test('testing the filter object is similar or not.', () => {
  expect(filter(data, 3)).toEqual(data[3]);
});
