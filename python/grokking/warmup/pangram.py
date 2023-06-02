def is_pangram(sentence: str) -> bool:
    # time: O(n)
    # space: O(1)
    chars = {char for char in sentence.lower() if char.isalpha()}
    return len(chars) == 26
