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

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncoder("din"),"(((");
    assert.strictEqual(duplicateEncoder("recede"),"()()()");
    assert.strictEqual(duplicateEncoder("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncoder("(( @"),"))((");
  });
});