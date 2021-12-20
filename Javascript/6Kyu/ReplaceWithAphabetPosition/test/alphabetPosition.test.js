const alphabetPosition = require('../lib/alphabetPosition')

describe('alphabet position', () => {

  describe('single character', () => {    
    it('works for single character a', () => {
      expect(alphabetPosition("a")).toEqual("1")
    })

    it('works for single character t', () => {
      expect(alphabetPosition("t")).toEqual("20")
    })

    it('works for single uppercase character A', () => {
      expect(alphabetPosition("A")).toEqual("1")
    })

    it('works for single uppercase character T', () => {
      expect(alphabetPosition("T")).toEqual("20")
    })

    it('returns blank string for non-character "."', () => {
      expect(alphabetPosition(".")).toEqual("")
    })

    it('returns blank string for non-character "."', () => {
      expect(alphabetPosition("!")).toEqual("")
    })
  })

  describe('multiple characters', () => {
    it('works for two characters "aa"', () => {
      expect(alphabetPosition("aa")).toEqual("1 1")
    })

    it('works for two characters "zb"', () => {
      expect(alphabetPosition("zb")).toEqual("26 2")
    })

    it('works for two characters "z."', () => {
      expect(alphabetPosition("z.")).toEqual("26")
    })

    it('works for example', () => {
      expect(alphabetPosition(
        "The sunset sets at twelve o' clock."
      )).toEqual(
        "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
      )
    })
  })


})
