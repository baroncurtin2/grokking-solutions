function containsDuplicateBruteForce(nums: number[]): boolean {
	// time: O(n^2)
	// space: O(1)

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j]) {
				return true;
			}
		}
	}

	return false;
}

function containsDuplicateSet(nums: number[]): boolean {
	// time: O(n)
	// space: O(n)
	let uniques = new Set();

	for (const num of nums) {
		if (uniques.has(num)) {
			return true;
		}

		uniques.add(num);
	}

	return false;
}

function containsDuplicateSorting(nums: number[]): boolean {
	// time: O(nlogn)
	// space: O(n)
	nums.sort();

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] == nums[i + 1]) {
			return true;
		}
	}
	return false;
}

export { containsDuplicateBruteForce, containsDuplicateSet, containsDuplicateSorting };
