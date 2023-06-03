import { mySqrt } from "../../src/warmup/sqrt";

describe('sqrt.js', () => {
    const tests = [
        {
            num: 15,
            expected: 3,
        },
        {
            num: 4,
            expected: 2,
        },
    ];

    tests.forEach((test, idx) => {
        it(`testCase: ${idx}`, () => {
            expect(mySqrt(test.num)).toBe(test.expected);
        })
    });
});