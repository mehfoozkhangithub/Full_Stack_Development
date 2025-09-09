import sum from "./sum";// es6
// const sum=require('./sum') // cjs

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});