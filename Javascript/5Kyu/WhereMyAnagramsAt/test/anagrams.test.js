const anagrams = require('../lib/anagrams')

describe('tests', () => {
  describe('formatting', () => {
    it('returns correct format for match', () => {
      expect(anagrams('a', ['a'])).toEqual(['a'])
    })

    it('returns correct format for no match', () => {
      expect(anagrams('a', ['b'])).toEqual([])
    })
  })

  describe('examples', () => {
    it('searches through an array', () => {
      expect(anagrams('a', ['b', 'c', 'a'])).toEqual(['a'])
    })
  })

})