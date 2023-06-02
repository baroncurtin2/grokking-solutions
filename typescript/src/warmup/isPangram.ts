export function isPangram(sentence: string): boolean {
	// time: O(n)
    // space: O(1)
	let chars = new Set<string>();

	for (const char of sentence.toLowerCase()) {
		if (char.match(/[a-z/i]/)) {
			chars.add(char);
		}
	}

	return chars.size === 26;
}
