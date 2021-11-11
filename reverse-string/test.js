const {
  reverse1,
  reverse2,
  reverse3,
  reverse4,
  reverse5,
} = require("./string_reversal");

test("Reverse functions should exist", () => {
  expect(reverse1).toBeDefined();
  expect(reverse2).toBeDefined();
  expect(reverse3).toBeDefined();
  expect(reverse4).toBeDefined();
  expect(reverse5).toBeDefined();
});

test("Reverse methods reverse a string", () => {
  expect(reverse1("abcd")).toEqual("dcba");
  expect(reverse2("abcd")).toEqual("dcba");
  expect(reverse3("abcd")).toEqual("dcba");
  expect(reverse4("abcd")).toEqual("dcba");
  expect(reverse5("abcd")).toEqual("dcba");
});

test("Reverse methods reverse a string with empty space", () => {
  expect(reverse1("  abcd")).toEqual("dcba  ");
  expect(reverse2("  abcd")).toEqual("dcba  ");
  expect(reverse3("  abcd")).toEqual("dcba  ");
  expect(reverse4("  abcd")).toEqual("dcba  ");
  expect(reverse5("  abcd")).toEqual("dcba  ");
});
