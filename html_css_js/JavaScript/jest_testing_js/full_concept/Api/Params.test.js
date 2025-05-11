import { SearchParams } from "./Params";

test("test the search params", () => {
  expect(
    SearchParams(
      `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=4`,
      `_limit`
    )
  ).toBe("10");
});
