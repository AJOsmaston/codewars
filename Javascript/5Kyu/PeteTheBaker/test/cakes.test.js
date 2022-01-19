const cakes = require('../lib/cakes')

describe('tests', () => {
  it('checks for an item', () => {
    expect(cakes({apples: 1}, {apples: 1})).toEqual(1)
  })

  it('checks for a different quanitity of item', () => {
    expect(cakes({apples: 1}, {apples: 2})).toEqual(2)
  })
})