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

    describe('unique numbers same weights', () => {
      it('65 56', () => {
        expect(orderWeight("65 56")).toEqual("56 65")
      })

      it('65 56 83 92 29 38', () => {
        expect(orderWeight("65 56 83 92 29 38")).toEqual("29 38 56 65 83 92")
      })

      it("2000 10003 1234000 44444444 9999 11 11 22 123", () => {
        expect(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")).toEqual("11 11 2000 10003 22 123 1234000 44444444 9999")
      })

    })
  })
})