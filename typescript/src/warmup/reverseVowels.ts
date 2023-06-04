export function reverseVowels(s: string): string {
	const vowels = "aeiouAEIOU";
	let start = 0,
		end = s.length - 1;
	let result = s.split("");

	while (start < end) {
		while (start < end && vowels.indexOf(result[start]) === -1) {
			start++;
		}

		while (start < end && vowels.indexOf(result[end]) === -1) {
			end--;
		}

		[result[start], result[end]] = [result[end], result[start]];

		start++;
		end--;
	}

	return result.join("");
}
