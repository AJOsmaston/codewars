const orderWeight = require('../lib/orderWeight')

describe('tests', () => {
  it('returns item as a string on individual item search', () => {
    expect(orderWeight("50")).toEqual("50")
  })

  describe('sorted lists', () => {
    describe('unique numbers different weights', () => {
      it('65 56', () => {
        expect(orderWeight("66 56")).toEqual("56 66")
      })


    })
    
  })
  
})