package two_pointers

func findSubarrays(arr []int, target int) [][]int {
	var result [][]int
	product := 1.0
	left := 0

	for right := 0; right < len(arr); right++ {
		product *= float64(arr[right])

		for product >= float64(target) && left < len(arr) {
			product /= float64(arr[left])
			left++
		}

		var tempList []int
		for i := right; i > left-1; i-- {
			tempList = append([]int{arr[i]}, tempList...)
			result = append(result, tempList)
		}
	}

	return result
}
