const cakes = require('../lib/cakes')

describe('tests', () => {
  it('checks for an apple', () => {
    expect(cakes({apples: 1}, {apples: 1})).toEqual(1)
  })

  it('checks for a different quanitity of apples', () => {
    expect(cakes({apples: 1}, {apples: 2})).toEqual(2)
  })

  it('checks for a different quanitity of pears', () => {
    expect(cakes({pears: 1}, {pears: 2})).toEqual(2)
  })

  it('checks for a different quanitity of pears in recipe', () => {
    expect(cakes({pears: 2}, {pears: 4})).toEqual(2)
  })

  it('checks for a different quanitity of a dofferent item in recipe', () => {
    expect(cakes({flour: 100}, {flour: 500})).toEqual(5)
  })
})