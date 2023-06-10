package two_pointers

import "sort"

type triplet = [3]int

func searchTriplets(arr []int) []triplet {
	triplets := make([]triplet, 0)
	sort.Ints(arr)

	for i := 0; i < len(arr); i++ {
		if i > 0 && arr[i] == arr[i-1] {
			continue
		}

		searchPair(arr, -arr[i], i+1, &triplets)
	}

	return triplets
}

func searchPair(arr []int, target int, left int, triplets *[]triplet) {
	right := len(arr) - 1

	for left < right {
		total := arr[left] + arr[right]

		if total < target {
			left++
		} else if total > target {
			right--
		} else {
			*triplets = append(*triplets, triplet{-target, arr[left], arr[right]})
			left++
			right--

			for left < right && arr[left] == arr[left-1] {
				left++
			}
			for left < right && arr[right] == arr[right+1] {
				right--
			}
		}
	}
}
