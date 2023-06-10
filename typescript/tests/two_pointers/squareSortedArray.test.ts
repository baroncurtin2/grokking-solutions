import {makeSquares} from "../../src/two_pointers/squareSortedArray";

describe('squareSortedArray.js', () => {
    interface TestCase {
        readonly arr: number[],
        readonly expected: number[],
    }

    const tests: Array<TestCase> = [
        {
            arr: [-2, -1, 0, 2, 3],
            expected: [0, 1, 4, 4, 9],
        },
        {
            arr: [-3, -1, 0, 1, 2],
            expected: [0, 1, 1, 4, 9],
        },
    ];

    test.each(tests)('makeSquares(%j', ({arr, expected}) => {
        expect(makeSquares(arr)).toStrictEqual(expected);
    });
});