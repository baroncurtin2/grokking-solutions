package warmup

import (
	"unicode"
)

func isAlphaNum(char byte) bool {
	return unicode.IsLetter(rune(char)) || unicode.IsDigit(rune(char))
}

func isPalindrome(s string) bool {
	start, end := 0, len(s)-1

	for start < end {
		for start < end && !isAlphaNum(s[start]) {
			start++
		}
		for start < end && !isAlphaNum(s[end]) {
			end--
		}
		
		if unicode.ToLower(rune(s[start])) != unicode.ToLower(rune(s[end])) {
			return false
		}
		
		start++
		end--
	}
	
	return true
}
