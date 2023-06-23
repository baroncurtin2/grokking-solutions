import { findSubArrays } from "../../src/two_pointers/subarraysWithProductLessTarget";

describe("subarraysWithProductLessTarget.js", () => {
    const tests = [
        {
            arr: [2, 5, 3, 10],
            target: 30,
            expected: [[2], [5], [2, 5], [3], [5, 3], [10]],
        },
        {
            arr: [8, 2, 6, 5],
            target: 50,
            expected: [[8], [2], [8, 2], [6], [2, 6], [5], [6, 5]],
        },
        {
            arr: [1, 2, 3, 4, 5],
            target: 10,
            expected: [[1], [2], [1, 2], [3], [2, 3], [1, 2, 3], [4], [5]],
        },
    ];

    test.each(tests)("findSubArrays(%j, %i)", ({ arr, target, expected }) => {
        expect(findSubArrays(arr, target)).toStrictEqual(expected);
    });
});
