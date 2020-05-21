const mathFn = require('../math');

describe("math lib", () => {
    test("elemental ops", () => {
        expect(mathFn.sum(3, 8)).toBe(11)
        expect(mathFn.sub(3, 8)).toBe(-5)
        expect(mathFn.mul(3, 8)).toBe(24)
        expect(mathFn.div(4, 8)).toBe(0.5)
    })
})