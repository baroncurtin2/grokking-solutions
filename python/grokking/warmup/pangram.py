def is_pangram(sentence: str) -> bool:
    chars = {char for char in sentence.lower() if char.isalpha()}
    return len(chars) == 26
