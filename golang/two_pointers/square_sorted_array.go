package two_pointers

func makeSquares(arr []int) []int {
	n := len(arr)
	highSqIdx := n - 1
	squares := make([]int, n)

	left, right := 0, n-1

	for left <= right {
		leftSq, rightSq := arr[left]*arr[left], arr[right]*arr[right]

		if leftSq > rightSq {
			squares[highSqIdx] = leftSq
			left++
		} else {
			squares[highSqIdx] = rightSq
			right--
		}

		highSqIdx--
	}

	return squares
}
