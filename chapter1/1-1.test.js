const isUnique = require("./1-1");

describe("isUnique", () => {
  it("should return true if all letters are different", () => {
    expect(isUnique("Ben")).toBe(true);
  });

  it("should return false if same letters appear", () => {
    expect(isUnique("Benny")).toBe(false);
  });

  it("should ignore white space", () => {
    expect(isUnique("Hi Ben you")).toBe(true);
  });

  it("should handle emoji", () => {
    expect(isUnique("😀😁😂🤣😃😄😅😆😉😊😋😎")).toBe(true);
  });
});
