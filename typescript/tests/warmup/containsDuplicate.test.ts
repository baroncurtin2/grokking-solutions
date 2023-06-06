import {
	containsDuplicateBruteForce,
	containsDuplicateSet,
	containsDuplicateSorting,
} from "../../src/warmup/containsDuplicate";

interface TestCase {
	readonly nums: number[];
	readonly expected: boolean;
}

describe("containsDuplicate.ts", () => {
	const tests: Array<TestCase> = [
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
		});
	});
});
