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

    it('calculates for 119s', () => {
      expect(formatDuration(119)).toEqual("1 minute and 59 seconds");
    });

    it('calculates for 60s', () => {
      expect(formatDuration(60)).toEqual("1 minute");
    });

    it('calculates for 120s', () => {
      expect(formatDuration(120)).toEqual("2 minutes");
    });
  });

  describe('hours', () => {
    it('calculates for 3601s', () => {
      expect(formatDuration(3601)).toEqual("1 hour and 1 second");
    });

  })
  
});