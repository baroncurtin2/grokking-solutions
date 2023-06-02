package warmup

import "sort"

func containsDuplicateBruteForce(nums []int) bool {
	// time: O(n^2)
	// space: O(1)
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] == nums[j] {
				return true
			}
		}
	}

	return false
}

func containsDuplicateSet(nums []int) bool {
	// time: O(n)
	// space: O(n)
	set := make(map[int]bool)

	for _, num := range nums {
		if _, ok := set[num]; ok {
			return true
		}

		set[num] = true
	}

	return false
}

func containsDuplicateSorting(nums []int) bool {
	// time: O(nlogn)
	// space: O(n)
	sort.Ints(nums)

	for i := 0; i < len(nums)-1; i++ {
		if nums[i] == nums[i+1] {
			return true
		}
	}

	return false
}
