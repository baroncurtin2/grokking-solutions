import {shortestDistance} from "../../src/warmup/shortestWordDistance";

describe('shortestWordDistance.ts', () => {
    interface TestCase {
        readonly words: string[],
        readonly word1: string,
        readonly word2: string,
        readonly expected: number,
    }

    const tests: Array<TestCase> = [
        {
            words: ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"],
            word1: 'fox',
            word2: 'dog',
            expected: 5,
        },
        {
            words: ["a", "b", "c", "d", "a", "b"],
            word1: 'a',
            word2: 'b',
            expected: 1,
        },
        {
            words: ["a", "c", "d", "b", "a"],
            word1: 'a',
            word2: 'b',
            expected: 1,
        },
    ];

    tests.forEach((test, idx) => {
        it(`testCase: ${idx}`, () => {
            expect(shortestDistance(test.words, test.word1, test.word2)).toBe(test.expected);
        })
    });
})