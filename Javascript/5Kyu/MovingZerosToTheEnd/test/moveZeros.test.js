const moveZeros = require("../lib/moveZeros");

describe('moveZeros', () => {
  describe('numbers', () => {
    it("doesn't move non 0's from a list of numbers", () => {
      expect(moveZeros([1,2,3])).toEqual([1,2,3])
    });

    it("moves a 0 inside a list of numbers", () => {
      expect(moveZeros([1,0,2,3])).toEqual([1,2,3,0])
    });
  });

  describe('example', () => {
    it('runs the example', () => {
      expect(moveZeros([false,1,0,1,2,0,1,3,"a"]))
        .toEqual([false,1,1,2,1,3,"a",0,0])
    });
  });
});
