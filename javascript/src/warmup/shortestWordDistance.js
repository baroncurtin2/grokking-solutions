export function shortestDistance(words, word1, word2) {
    let result = words.length;

    let pos1 = -1,
        pos2 = -1;

    words.forEach((word, i) => {
        if (word == word1) {
            pos1 = i;
        } else if (word == word2) {
            pos2 = i;
        }

        if (pos1 !== pos2 && pos1 !== -1 && pos2 !== -1) {
            result = Math.min(result, Math.abs(pos1 - pos2));
        }
    });

    return result;
}
