const moveZeros = require("../lib/moveZeros");

describe('moveZeros', () => {
  it("doesn't move non 0's from a list of numbers", () => {
    expect(moveZeros([1,2,3])).toEqual([1,2,3])
  });

  it("moves a 0 inside a list of numbers", () => {
    expect(moveZeros([1,0,2,3])).toEqual([1,2,3,0])
  });
});
