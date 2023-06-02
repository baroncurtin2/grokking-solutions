import { isPangram } from "../../src/warmup/isPangram";

interface TestCase {
    readonly sentence: string;
    readonly expected: boolean;
}

describe('isPangram.js', () => {
    const tests: Array<TestCase> = [
        {
            sentence: 'This is not a pangram',
            expected: false,
        },
        {
            sentence: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            expected: true,
        },
    ];

    tests.forEach((test, idx) => {
        it(`testCase: ${idx}`, () => {
            expect(isPangram(test.sentence)).toBe(test.expected);
        })
    });
})