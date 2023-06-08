import {pairWithTargetSum} from "../../src/two_pointers/pairWithTarget";

describe('pairWithTarget.js', () => {
    interface TestCase {
        readonly arr: number[],
        readonly targetSum: number,
        readonly expected: number[],
    }
    
    const tests: Array<TestCase> = [
        {
            arr: [1, 2, 3, 4, 6],
            targetSum: 6,
            expected: [1, 3],
        },
        {
            arr: [2, 5, 9, 11],
            targetSum: 11,
            expected: [0, 2],
        },
    ];

    tests.forEach((test, idx) => {
        it(`testCase: ${idx}`, () => {
            expect(pairWithTargetSum(test.arr, test.targetSum)).toStrictEqual(test.expected);
        })
    });
})