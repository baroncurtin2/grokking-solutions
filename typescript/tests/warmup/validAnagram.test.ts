import {isAnagram} from "../../src/warmup/validAnagram";

describe('validAnagram.ts', () => {
    interface TestCase {
        readonly s: string;
        readonly t: string;
        readonly expected: boolean;
    }
    
    const tests: Array<TestCase> = [
        {
            s: 'listen',
            t: 'silent',
            expected: true,
        },
        {
            s: 'hello',
            t: 'world',
            expected: false,
        },
        {
            s: 'anagram',
            t: 'nagaram',
            expected: true,
        },
        {
            s: 'rat',
            t: 'car',
            expected: false,
        },
        {
            s: '',
            t: '',
            expected: true,
        },
    ];

    tests.forEach((test, idx) => {
        it(`testCase: ${idx}`, () => {
            expect(isAnagram(test.s, test.t)).toBe(test.expected);
        })
    });
})