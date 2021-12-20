const alphabet_position = require('../lib/alphabet_position')

describe('alphabet position', () => {
  
  it('works for single character a', () => {
    expect(alphabet_position("a")).toEqual("1")
  })

  it('works for single character t', () => {
    expect(alphabet_position("t")).toEqual("20")
  })

})