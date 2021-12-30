const anagrams = require('../lib/anagrams')

describe('tests', () => {
  it('returns correctly', () => {
    expect(anagrams('a', ['a'])).toEqual(['a'])
  })
})