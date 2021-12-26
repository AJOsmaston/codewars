const formatDuration = require('../lib/formatDuration')

describe('tests', () => {
  it('calculates for 1s', () => {
    expect(formatDuration(1)).toEqual("1 second")
  })
})