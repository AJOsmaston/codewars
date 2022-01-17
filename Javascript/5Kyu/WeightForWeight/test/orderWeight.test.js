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

      it('74 100', () => {
        expect(orderWeight("74 100")).toEqual("100 74")
      })

      it("74 100 99", () => {
        expect(orderWeight("74 100 99")).toEqual("100 74 99")
      })
    })

    // describe('unique numbers same weights', () => {
    //   it('65 56', () => {
    //     expect(orderWeight("65 56")).toEqual("56 65")
    //   })
    // })
  })
})