const formatDuration = require('../lib/formatDuration')

describe('tests', () => {
  describe('seconds', () => {
    it('calculates for 1s', () => {
      expect(formatDuration(1)).toEqual("1 second");
    });
  
    it('calculates for 2s', () => {
      expect(formatDuration(2)).toEqual("2 seconds");
    });
  });

  describe('minutes', () => {
    it('calculates for 61s', () => {
      expect(formatDuration(61)).toEqual("1 minute and 1 second");
    });
  });
  
});