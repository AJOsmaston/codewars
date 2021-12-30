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

    it('returns multiple in order', () => {
      expect(anagrams('ab', ['ab', 'b', 'c', 'ba'])).toEqual(['ab', 'ba'])
    })
  })

  describe('given examples', () => {
    it('works for the first example', () => {
      expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual(['aabb', 'bbaa']);
    });

    it('works for the second example', () => {
      expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toEqual(['carer', 'racer']);
    });
  })

})