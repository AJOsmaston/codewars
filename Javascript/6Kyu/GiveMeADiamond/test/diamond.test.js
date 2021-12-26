const diamond = require('../lib/diamond')

describe('tests', () => {
  describe('edge cases', () => {
    it('returns null on even 2', () => {
      expect(diamond(2)).toEqual(null)
    })

    it('returns null on even 4', () => {
      expect(diamond(4)).toEqual(null)
    })

    it('returns null on negative 1', () => {
      expect(diamond(-1)).toEqual(null)
    })
  })
  
})