const anagrams = require('../lib/anagrams')

describe('tests', () => {
  it('returns correct format for match', () => {
    expect(anagrams('a', ['a'])).toEqual(['a'])
  })

  it('returns correct format for no match', () => {
    expect(anagrams('a', ['b'])).toEqual([])
  })

})