const alphabet_position = require('../lib/alphabet_position')

describe('alphabet position', () => {

  describe('single character', () => {    
    it('works for single character a', () => {
      expect(alphabet_position("a")).toEqual("1")
    })

    it('works for single character t', () => {
      expect(alphabet_position("t")).toEqual("20")
    })

    it('works for single uppercase character A', () => {
      expect(alphabet_position("A")).toEqual("1")
    })

    it('works for single uppercase character T', () => {
      expect(alphabet_position("T")).toEqual("20")
    })

    it('returns blank string for non-character "."', () => {
      expect(alphabet_position(".")).toEqual("")
    })

    it('returns blank string for non-character "."', () => {
      expect(alphabet_position("!")).toEqual("")
    })
  })

  describe('multiple characters', () => {
    it('works for two characters "aa"', () => {
      expect(alphabet_position("aa")).toEqual("1 1")
    })
  })


})
