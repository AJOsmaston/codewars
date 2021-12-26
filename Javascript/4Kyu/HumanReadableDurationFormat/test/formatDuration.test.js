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

    it('calculates for 3660s', () => {
      expect(formatDuration(3660)).toEqual("1 hour and 1 minute");
    });

    it('calculates for 3661s', () => {
      expect(formatDuration(3661)).toEqual("1 hour, 1 minute and 1 second");
    });

  })

  describe('days', () => {
    it('calculates for 86400s', () => {
      expect(formatDuration(86400)).toEqual("1 day");
    });

    it('calculates for 172800s', () => {
      expect(formatDuration(172800)).toEqual("2 days");
    });

    it('calculates for 172801s', () => {
      expect(formatDuration(172801)).toEqual("2 days and 1 second");
    });

    it('calculates for 172861s', () => {
      expect(formatDuration(172861)).toEqual("2 days, 1 minute and 1 second");
    });

    it('calculates for 176461s', () => {
      expect(formatDuration(176461)).toEqual("2 days, 1 hour, 1 minute and 1 second");
    });
  });

  describe('years', () => {
    it('calculates for 31536000s', () => {
      expect(formatDuration(31536000)).toEqual("1 year");
    });
  });
  
});