import { tripletSumCloseToTarget } from "../../src/two_pointers/tripletCloseToTarget";

describe("tripletCloseToTarget.ts", () => {
    interface TestCase {
        readonly arr: number[];
        readonly targetSum: number;
        readonly expected: number;
    }

    const tests: TestCase[] = [
        {
            arr: [-1, 0, 2, 3],
            targetSum: 3,
            expected: 2,
        },
        {
            arr: [-3, -1, 1, 2],
            targetSum: 1,
            expected: 0,
        },
        {
            arr: [1, 0, 1, 1],
            targetSum: 100,
            expected: 3,
        },
        {
            arr: [0, 0, 1, 1, 2, 6],
            targetSum: 5,
            expected: 4,
        },
    ];

    test.each(tests)(
        "tripletCloseToTarget(%j, %i)",
        ({ arr, targetSum, expected }) => {
            expect(tripletSumCloseToTarget(arr, targetSum)).toStrictEqual(
                expected
            );
        }
    );
});
