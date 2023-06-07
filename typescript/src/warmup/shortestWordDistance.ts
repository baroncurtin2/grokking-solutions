export function shortestDistance(words: string[], word1: string, word2: string): number {
    let result: number = words.length;

    let pos1: number = -1, pos2: number = -1;

    words.forEach((word, i) => {
        if (word == word1) {
            pos1 = i;
        } else if (word == word2) {
            pos2 = i;
        }

        if (pos1 !== pos2 && pos1 !== -1 && pos2 !== -1) {
            result = Math.min(result, Math.abs(pos1 - pos2));
        }
    })

    return result;
}