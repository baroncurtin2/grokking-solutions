import {removeDuplicates, removeAllKeys} from "../../src/two_pointers/removeDuplicates";

describe('removeDuplicates.js', () => {
    describe('removeDuplicates test', () => {
        interface TestCase {
            readonly arr: number[],
            readonly expected: number,
        }
        
        const tests: Array<TestCase> = [
            {
                arr: [2, 3, 3, 3, 6, 9, 9],
                expected: 4,
            },
            {
                arr: [2, 2, 2, 11],
                expected: 2,
            },
        ];
        
        test.each(tests)('removeDuplicates(%j)', ({arr, expected}) => {
            expect(removeDuplicates(arr)).toStrictEqual(expected);
        });
    });

    describe('removeAllKeys test', () => {
        interface TestCase {
            readonly arr: number[],
            readonly key: number,
            readonly expected: number,
        }
        
        const tests: Array<TestCase> = [
            {
                arr: [3, 2, 3, 6, 3, 10, 9, 3],
                key: 3,
                expected: 4,
            },
            {
                arr: [2, 11, 2, 2, 1],
                key: 2,
                expected: 2,
            },
        ];
        
        test.each(tests)('removeAllKeys(%j, %i)', ({arr, key, expected}) => {
            expect(removeAllKeys(arr, key)).toStrictEqual(expected);
        });
    });
});