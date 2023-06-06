import {isPalindrome} from "../../src/warmup/validPalindrome";

interface TestCase {
    readonly s: string;
    readonly expected: boolean;
}

describe('validPalindrome.ts', () => {
    const tests: Array<TestCase> = [
        {
            s: 'A man, a plan, a canal, Panama!',
            expected: true,
        },
        {
            s: 'race a car',
            expected: false,
        },
        {
            s: 'Was it a car or a cat I saw?',
            expected: true,
        },
        {
            s: "Madam, in Eden, I'm Adam.",
            expected: true,
        },
        {
            s: '',
            expected: true,
        },
    ];

    tests.forEach((test, idx) => {
        it(`testCase: ${idx}`, () => {
            expect(isPalindrome(test.s)).toBe(test.expected);
        })
    })
});