from collections import defaultdict


def is_anagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    counter = defaultdict(int)

    for x, y in zip(s, t):
        counter[x] += 1
        counter[y] -= 1
    
    return not any(v != 0 for v in counter.values())
