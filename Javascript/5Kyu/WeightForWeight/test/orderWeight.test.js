const orderWeight = require('../lib/orderWeight')

describe('tests', () => {
  it('returns item as a string on individual item search', () => {
    expect(orderWeight("50")).toEqual("50")
  })
})