const humanReadable = require('../lib/humanReadable')

describe('TDD tests', () => {

  it('formats correctly', () => {
    expect(humanReadable(0)).toEqual('00:00:00')
  })

  describe('seconds', () => {
    it('1 second', () => {
      expect(humanReadable(1)).toEqual('00:00:01')
    })

    it('59 seconds', () => {
      expect(humanReadable(59)).toEqual('00:00:59')
    })
  })

  describe('minutes', () => {
    it('60 seconds', () => {
      expect(humanReadable(60)).toEqual('00:01:00')
    })
    it('3599 seconds', () => {
      expect(humanReadable(3599)).toEqual('00:59:59')
    })
  })

  describe('hours', () => {
    it('3600 seconds', () => {
      expect(humanReadable(3600)).toEqual('01:00:00')
    })

    it('359999 seconds', () => {
      expect(humanReadable(359999)).toEqual('99:59:59')
    })
  })

})
