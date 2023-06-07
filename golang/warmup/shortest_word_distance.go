package warmup

import "math"

func shortestDistance(words []string, word1 string, word2 string) int {
	result := len(words)

	pos1, pos2 := -1, -1

	for i, word := range words {
		if word == word1 {
			pos1 = i
		} else if word == word2 {
			pos2 = i
		}

		if pos1 != -1 && pos2 != -1 {
			result = int(math.Min(float64(result), math.Abs(float64(pos1-pos2))))
		}
	}

	return result
}
