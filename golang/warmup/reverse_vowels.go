package warmup

import "unicode"

func reverseVowels(s string) string {
	result := []rune(s)
	start := 0
	end := len(result) - 1

	for start < end {
		for start < end && !isVowel(result[start]) {
			start++
		}

		for start < end && !isVowel(result[end]) {
			end--
		}

		// switch vowels
		result[start], result[end] = result[end], result[start]

		start++
		end--
	}

	return string(result)
}

func isVowel(c rune) bool {
	vowels := map[rune]bool{
		'a': true,
		'e': true,
		'i': true,
		'o': true,
		'u': true,
	}

	v := unicode.ToLower(c)
	if _, ok := vowels[v]; ok {
		return true
	}

	return false
}
