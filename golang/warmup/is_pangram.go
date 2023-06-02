package warmup

import "strings"

func isPangram(sentence string) bool {
	// time: O(n)
    // space: O(1)
	set := make(map[rune]bool)

	for _, char := range strings.ToLower(sentence) {
		if char >= 'a' && char <= 'z' {
			set[char] = true
		}
	}

	return len(set) == 26
}
