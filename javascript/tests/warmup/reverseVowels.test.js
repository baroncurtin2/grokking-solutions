import { reverseVowels } from "../../src/warmup/reverseVowels";

describe('reverseVowels.js', () => {
    const tests = [
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