import removeFinalCharacter from "./removeFinalCharacter";

test("removeFinalCharacter removes the final character from a string", () => {
  expect(removeFinalCharacter("hello world")).toBe("hello worl");
  expect(removeFinalCharacter("hello world!")).toBe("hello world");
  expect(removeFinalCharacter("hello world! ")).toBe("hello world!");
  expect(removeFinalCharacter("plurals")).toBe("plural");
});
