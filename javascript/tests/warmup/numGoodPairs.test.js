import {numGoodPairs} from "../../src/warmup/numGoodPairs";

describe('numGoodPairs.js', () => {
    const tests = [
        {
            nums: [1, 2, 3],
            expected: 0,
        },
        {
            nums: [1, 1, 1, 1],
            expected: 6,
        },
        {
            nums: [1, 2, 3, 1, 1, 3],
            expected: 4,
        },
    ];

    tests.forEach((test, idx) => {
        it(`testCase: ${idx}`, () => {
            expect(numGoodPairs(test.nums)).toBe(test.expected);
        })
    });
})