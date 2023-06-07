def shortest_distance(words: list[str], word1: str, word2: str) -> int:
    result = len(words)

    pos_1, pos_2 = -1, -1

    for i, word in enumerate(words):
        if word == word1:
            pos_1 = i
        elif word == word2:
            pos_2 = i

        if pos_1 != pos_2 != -1:
            result = min(result, abs(pos_1 - pos_2))

    return result
