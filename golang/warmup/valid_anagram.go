package warmup

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	
	counter := make(map[rune]int)
	
	for i := 0; i < len(s); i++ {
		counter[rune(s[i])]++
		counter[rune(t[i])]--
	}
	
	for _, val := range counter {
		if val != 0 {
			return false
		}
	}
	
	return true
}