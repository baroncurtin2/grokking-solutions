from collections import defaultdict


def num_good_pairs(nums: list[int]) -> int:
    pairs = 0
    freq_map = defaultdict(int)

    for n in nums:
        freq_map[n] += 1
        pairs += freq_map[n] - 1

    return pairs
