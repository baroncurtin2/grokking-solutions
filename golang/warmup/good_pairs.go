package warmup

func numGoodPairs(nums []int) int {
	pairs := 0
	freqMap := make(map[int]int)

	for _, n := range nums {
		freqMap[n]++
		pairs += freqMap[n] - 1
	}

	return pairs
}
