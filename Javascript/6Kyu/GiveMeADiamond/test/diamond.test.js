const diamond = require('../lib/diamond')

describe('tests', () => {
  describe('edge cases', () => {
    it('returns null on even 2', () => {
      expect(diamond(2)).toEqual(null)
    })

    it('returns null on even 4', () => {
      expect(diamond(2)).toEqual(null)
    })
  })
  
})