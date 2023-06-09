package two_pointers

func removeDuplicates(arr []int) int {
	// time: O(n)
	// space: O(1)
	if len(arr) <= 1 {
		return len(arr)
	}
	
	// two pointers
	i, j := 0, 1
	
	for j < len(arr) {
		if arr[i] != arr[j] {
			i++
			arr[i] = arr[j]
		}
		
		j++
	}
	
	return i + 1
}

func removeAllKeys(arr []int, key int) int {
	// time: O(n)
	// space: O(1)
	i := 0
	
	for j := 0; j < len(arr); j++ {
		if arr[j] != key {
			arr[i] = arr[j]
			i++
		}
	}
	
	return i
}