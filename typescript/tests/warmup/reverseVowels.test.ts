import { reverseVowels } from "../../src/warmup/reverseVowels";

interface TestCase {
    readonly s: string;
    readonly expected: string;
}

describe('reverseVowels.js', () => {
    const tests: Array<TestCase> = [
        {
            s: 'hello',
            expected: 'holle',
        },
        {
            s: 'DesignGUrus',
            expected: 'DusUgnGires',
        },
        {
            s: 'AEIOU',
            expected: 'UOIEA',
        },
        {
            s: 'aA',
            expected: 'Aa',
        },
        {
            s: '',
            expected: '',
        },
    ];

    tests.forEach((test, idx) => {
        it(`testCase: ${idx}`, () => {
            expect(reverseVowels(test.s)).toBe(test.expected);
        })
    });
});