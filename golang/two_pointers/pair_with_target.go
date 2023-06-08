package two_pointers

func pairWithTargetSum(arr []int, target int) []int {
	start, end := 0, len(arr) - 1
	
	for start < end {
		a, b := arr[start], arr[end]
		
		if a + b < target {
			start++
		} else if a + b > target {
			end--
		} else {
			return []int{start, end}
		}
	}
	
	return []int{-1, -1}
}
