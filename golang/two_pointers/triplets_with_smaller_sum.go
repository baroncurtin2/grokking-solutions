package two_pointers

import "sort"

func searchTripletsSmallerSum(arr []int, target int) int {
	count := 0
	sort.Ints(arr)

	for i := 0; i < len(arr)-2; i++ {
		count += searchPairSmallerSum(arr, target-arr[i], i)
	}

	return count
}

func searchPairSmallerSum(arr []int, target int, first int) int {
	count := 0
	left, right := first+1, len(arr)-1

	for left < right {
		if arr[left]+arr[right] < target {
			count += right - left
			left++
		} else {
			right--
		}
	}

	return count
}
