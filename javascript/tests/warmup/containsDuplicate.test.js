import { containsDuplicateBruteForce, containsDuplicateSet, containsDuplicateSorting } from '../../src/warmup/containsDuplicate';

describe('containsDuplicate.js', () => {
    const tests = [
        {
            nums: [1, 2, 3, 1],
            expected: true,
        },
        {
            nums: [3, 9, 1, 2],
            expected: false,
        },
    ];

    tests.forEach((test, idx) => {
        it(`testCase: ${idx}`, () => {
            expect(containsDuplicateBruteForce(test.nums)).toBe(test.expected);
            expect(containsDuplicateSet(test.nums)).toBe(test.expected);
            expect(containsDuplicateSorting(test.nums)).toBe(test.expected);
        })
    });
});