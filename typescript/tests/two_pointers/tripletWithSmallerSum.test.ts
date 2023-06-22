import { searchTriplets } from "../../src/two_pointers/tripletWithSmallerSum";

describe("tripletWithSmallerSum.js", () => {
    interface TestCase {
        readonly arr: number[];
        readonly target: number;
        readonly expected: number;
    }

    const tests: TestCase[] = [
        {
            arr: [-1, 0, 2, 3],
            target: 3,
            expected: 2,
        },
        {
            arr: [-1, 4, 2, 1, 3],
            target: 5,
            expected: 4,
        },
        {
            arr: [1, 2, 3, 4, 5],
            target: 10,
            expected: 6,
        },
        {
            arr: [0, 0, 0, 0, 0],
            target: 1,
            expected: 10,
        },
        {
            arr: [-1, -1, -1, 1, 1, 1],
            target: 1,
            expected: 10,
        },
        {
            arr: [-2, -1, 0, 1, 2],
            target: 3,
            expected: 9,
        },
        {
            arr: [1, 2, 3, 4, 5],
            target: 6,
            expected: 0,
        },
    ];

    test.each(tests)("searchTriplets(%j, %i)", ({ arr, target, expected }) => {
        expect(searchTriplets(arr, target)).toEqual(expected);
    });
});
