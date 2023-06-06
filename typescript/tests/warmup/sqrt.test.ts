import { mySqrt } from "../../src/warmup/sqrt";

interface TestCase {
    readonly num: number;
    readonly expected: number;
}

describe('sqrt.ts', () => {
    const tests: Array<TestCase> = [
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