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

    it('returns null on negative 1', () => {
      expect(diamond(-3)).toEqual(null)
    })
  })

  describe('diamonds', () => {
    it('returns size 1 diamond', () => {
      expect(diamond(1)).toEqual("*\n")
    })

    it('returns size 3 diamond', () => {
      expect(diamond(3)).toEqual(" *\n***\n *\n")
    })

    it('returns size 5 diamond', () => {
      expect(diamond(5)).toEqual("  *\n ***\n*****\n ***\n  *\n")
    })
  })
  
})