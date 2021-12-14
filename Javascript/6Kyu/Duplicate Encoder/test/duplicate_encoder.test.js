const duplicateEncoder = require("../lib/duplicate_encoder")

describe('duplicateEncoder', () => {
    it('passes the first test', () => {
        expect(duplicateEncoder("d")).toEqual("(")
    })
})