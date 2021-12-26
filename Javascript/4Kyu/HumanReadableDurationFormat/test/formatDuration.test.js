const formatDuration = require('../lib/formatDuration')

describe('tests', () => {
  it('calculates for 1s', () => {
    expect(formatDuration(1)).toEqual("1 second")
  })

  it('calculates for 2s', () => {
    expect(formatDuration(2)).toEqual("2 seconds")
  })
})