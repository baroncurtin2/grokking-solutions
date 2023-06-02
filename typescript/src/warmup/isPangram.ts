export function isPangram(sentence: string): boolean {
	let chars = new Set<string>();

	for (const char of sentence.toLowerCase()) {
		if (char.match(/[a-z/i]/)) {
			chars.add(char);
		}
	}

	return chars.size === 26;
}
