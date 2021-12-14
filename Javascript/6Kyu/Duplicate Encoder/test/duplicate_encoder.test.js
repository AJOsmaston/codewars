const duplicateEncoder = require("../lib/duplicate_encoder")

describe('duplicateEncoder', () => {
    it('returns ( for single input', () => {
        expect(
            duplicateEncoder("d")
        ).toEqual("(");
    });

    it('returns (( for 2x single inputs', () => {
        expect(
            duplicateEncoder("dq")
        ).toEqual("((")
    });
})