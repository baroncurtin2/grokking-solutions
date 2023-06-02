export function isPangram(sentence) {
	let chars = new Set();

	for (const char of sentence.toLowerCase()) {
		if (char.match(/[a-z/i]/)) {
			chars.add(char);
		}
	}

	return chars.size === 26;
}
