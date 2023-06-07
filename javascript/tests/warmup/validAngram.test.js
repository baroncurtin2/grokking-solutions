import {isAnagram} from "../../src/warmup/validAnagram";

describe('validAnagram.js', () => {
    const tests = [
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