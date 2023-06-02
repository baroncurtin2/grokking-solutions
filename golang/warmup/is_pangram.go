package warmup

import "strings"

func isPangram(sentence string) bool {
	set := make(map[rune]bool)

	for _, char := range strings.ToLower(sentence) {
		if char >= 'a' && char <= 'z' {
			set[char] = true
		}
	}

	return len(set) == 26
}
