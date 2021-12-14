const duplicateEncoder = require("../lib/duplicate_encoder")

describe('duplicateEncoder', () => {
    describe('( only', () => {
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
    });

    describe('mixture output', () => {
        it('returns ) for double input', () => {
            expect(
                duplicateEncoder("dd")
            ).toEqual("))");
        })

        it('returns )) for double input mixed case', () => {
            expect(
                duplicateEncoder("Dd")
            ).toEqual("))");
        })
    });
});